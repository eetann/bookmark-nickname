import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Bookmark Nickname",
  version: "1.0.0",
  permissions: ["bookmarks"],
  action: {
    default_popup: "index.html",
  },
  commands: {
    _execute_action: {
      suggested_key: {
        default: "Ctrl+Shift+Y",
      },
    },
  },
});

export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
