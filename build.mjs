import esbuild from "esbuild"
import fs from "fs-extra"
import archiver from "archiver"
import postcssPlugin from "esbuild-style-plugin"
import tailwindcss from "tailwindcss"

const outdir = "build"
const packagesDir = "packages"
const appName = "SummarAI-"

let buildConfig = {
  entryPoints: ["src/content/index.tsx", "src/options/index.tsx", "src/popup/popup.ts"],
  bundle: true,
  treeShaking: true,
  outdir: outdir,
  drop: ["debugger"],
  legalComments: "none",
  loader: {
    ".png": "dataurl",
    ".svg": "dataurl",
  },
  minify: false,
  jsxFactory: "h",
  jsxFragment: "Fragment",
  jsx: "automatic",
  plugins: [
    postcssPlugin({
      postcss: {
        plugins: [tailwindcss],
      },
    }),
  ],
}

async function deleteOldDir() {
  await fs.remove(outdir)
}

async function runEsbuild() {
  await esbuild.build(buildConfig)
}

async function zipFolder(dir) {
  const output = fs.createWriteStream(`${dir}.zip`)
  const archive = archiver("zip", {
    zlib: { level: 9 },
  })
  archive.pipe(output)
  archive.directory(dir, false)
  await archive.finalize()
}

async function copyFiles(entryPoints, targetDir) {
  await fs.ensureDir(targetDir)
  await Promise.all(
    entryPoints.map(async (entryPoint) => {
      await fs.copy(entryPoint.src, `${targetDir}/${entryPoint.dst}`)
    })
  )
}

async function build() {
  await deleteOldDir()
  await runEsbuild()

  const commonFiles = [
    { src: "build/content/index.js", dst: "content.js" },
    { src: "build/options/index.js", dst: "options.js" },
    { src: "build/options/index.css", dst: "options.css" },
    { src: "build/popup/popup.js", dst: "popup.js" },
    { src: "src/popup/styles.css", dst: "popup.css" },
    { src: "src/popup/popup.html", dst: "popup.html" },
    { src: "src/options/index.html", dst: "options.html" },
    { src: "src/config/tool.js", dst: "tool.js" },
    { src: "src/assets/img/logo-16.png", dst: "logo-16.png" },
    { src: "src/assets/img/logo-32.png", dst: "logo-32.png" },
    { src: "src/assets/img/logo-48.png", dst: "logo-48.png" },
    { src: "src/assets/img/logo-128.png", dst: "logo-128.png" },
    { src: "src/assets/img/logo.png", dst: "logo.png" },
    { src: "src/assets/img/copy.png", dst: "copy.png" },
    { src: "src/assets/img/setting.png", dst: "setting.png" },
  ]

  // chromium
  await copyFiles(
    [...commonFiles, { src: "src/manifest.json", dst: "manifest.json" }],
    `./${outdir}/chromium`
  )

  await zipFolder(`./${outdir}/chromium`)
  await copyFiles(
    [
      {
        src: `${outdir}/chromium.zip`,
        dst: `${appName}chromium.zip`,
      },
    ],
    `./${packagesDir}`
  )

  await copyFiles(
    [
      {
        src: `${outdir}/chromium`,
        dst: `./chromium`,
      },
    ],
    `./${packagesDir}`
  )

  console.log("Build success.")
}

build()
