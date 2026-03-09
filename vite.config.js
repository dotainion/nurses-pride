import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    base: '/nurses-pride/',
    plugins: [react()],
    build: {
        outDir: 'nurses-pride'
    }
})
