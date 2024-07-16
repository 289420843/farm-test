import { defineConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";
import path from "path";
import fs from "fs";

export default defineConfig({
  server: {
    port: 3005,
  },
  compilation: {
    persistentCache: false,
    output: {
      format: "cjs",
    },
    resolve: {
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
