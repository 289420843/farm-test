import { defineConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";
import path from "path";
import fs from "fs";

export default defineConfig({
  compilation: {
    input: {
      index: "./index.html",
      test: "./test.html",
    },
    persistentCache: false,
    runtime: {
      isolate: true,
    },
    resolve: {
      extensions: [
        "vue",
        "tsx",
        "ts",
        "d.ts",
        "jsx",
        "js",
        "mjs",
        "json",
        "html",
        "css",
      ],
      alias: {
        ...Object.fromEntries(
          fs
            .readdirSync("./src")
            .filter((name) => fs.statSync(`./src/${name}`).isDirectory())
            .map((name) => [name, path.join(process.cwd(), "src", name)]),
        ),
      },
    },
    minify: false,
    treeShaking: false,
  },
  vitePlugins: [vue()],
});
