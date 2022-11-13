const path = require("path");
const resolve = require("@rollup/plugin-node-resolve");
const babel = require("@rollup/plugin-babel");
const postcss = require("rollup-plugin-postcss");
const ts = require("rollup-plugin-typescript2");
const dts = require("rollup-plugin-dts");
const fs = require("fs");

const config = {
  input: "./src/index.ts",
  output: {
    dir: "lib",
    format: "cjs",
    preserveModules: true,
    preserveModulesRoot: "lib",
  },
  plugins: [ts(), resolve(), babel()],
};

fs.readdirSync("./src/").forEach((item) => {
  const bool = fs
    .lstatSync(path.resolve(__dirname, "./src/" + item))
    .isDirectory();
  if (bool) {
    config.plugins.push(
      postcss({
        include: `**/${item}/index.module.scss`,
        extract: path.resolve(__dirname, `lib/${item}/style/index.css`),
      })
    );
  }
});

const configDTS = {
  input: "./src/index.ts",
  output: {
    file: path.resolve(__dirname, "./lib/index.d.ts"),
    format: "es",
  },
  plugins: [dts.default()],
};

module.exports = [config, configDTS];
