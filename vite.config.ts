import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vitest/config";

import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills(), react(), UnoCSS()],
  test: {
    environment: "happy-dom",
    restoreMocks: true,
    setupFiles: ["./setupTests.ts"],
  },
});
