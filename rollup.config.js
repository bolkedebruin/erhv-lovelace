import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const dev = process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    file: "dist/erhv-card.js",
    format: "es",
  },
  plugins: [
    nodeResolve(),
    json(),
    typescript(),
    !dev && terser({ format: { comments: false } }),
  ],
};

