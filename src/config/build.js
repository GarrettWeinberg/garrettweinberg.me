// .eleventy.js

import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

export default async function (config) {
  config.on("afterBuild", () => {
    return esbuild.build({
      entryPoints: [
        "src/assets/styles/styles.scss",
        "src/assets/scripts/main.js",
      ],
      outdir: "public/assets",
      bundle: true,
      minify: process.env.ELEVENTY_ENV === "production",
      sourcemap: process.env.ELEVENTY_ENV !== "production",
      plugins: [sassPlugin()],
      loader: {
        ".woff": "file",
        ".woff2": "file",
        ".eot": "file",
        ".ttf": "file",
        ".otf": "file",
      },
      assetNames: "fonts/[name]", // Ensures fonts are placed in /public/assets/fonts/
    });
  });
}
