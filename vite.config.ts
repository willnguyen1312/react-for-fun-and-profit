import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  test: {
    environment: "happy-dom",
    restoreMocks: true,
    setupFiles: ["./setupTests.ts"],
  },
});
