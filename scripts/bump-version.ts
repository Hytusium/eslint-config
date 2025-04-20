import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { parseArgs, type ParseArgsConfig } from "node:util"

import { version } from "../package.json" with { type: "json" }

const workspaces = "./packages"
const packagesJson = "package.json"
const versionArray = version.split(".").map((v) => Number.parseInt(v))
const [majorVersion, minorVersion, patchVersion] = versionArray

const options: ParseArgsConfig["options"] = {
  patch: {
    type: "boolean",
  },
  minor: {
    type: "boolean",
  },
  major: {
    type: "boolean",
  },
}

const {
  values: { patch, minor, major },
} = parseArgs({ options })

let newVersion = ""

if (major) {
  newVersion = `${majorVersion! + 1}.0.0`
} else if (minor) {
  newVersion = `${majorVersion}.${minorVersion! + 1}.0`
} else if (patch) {
  newVersion = `${majorVersion}.${minorVersion}.${patchVersion! + 1}`
} else {
  console.error("specify bump version")
}

const rootProjectPath = "./package.json"
const rootProjectContent = await readFile(rootProjectPath, {
  encoding: "utf8",
})
await writeFile(
  rootProjectPath,
  rootProjectContent.replace(version, newVersion)
)
const packages = await readdir(workspaces)
await Promise.all(
  packages.map(async (d) => {
    const projectPath = path.join(workspaces, d, packagesJson)
    const projectContent = await readFile(projectPath, { encoding: "utf8" })
    await writeFile(projectPath, projectContent.replace(version, newVersion))
  })
)
