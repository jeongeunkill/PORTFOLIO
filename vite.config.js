// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO/',   // 🔥 리포 이름과 정확히 일치 (대소문자 주의)
})
