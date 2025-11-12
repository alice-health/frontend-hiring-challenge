import viteConfig from "./vite.config";

import { mergeConfig } from "vite";

export default mergeConfig(viteConfig, {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/vitest.setup.ts",
  },
});
