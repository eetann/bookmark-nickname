import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'Bookmark Nickname',
  version: '1.0.0',
  permissions: ["bookmarks"],
  action: {
    default_popup: "index.html"
  }
})

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
})
