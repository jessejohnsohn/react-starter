import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), mkcert()],
    optimizeDeps: {
        include: ['@mui/icons-material', '@mui/material/Unstable_Grid2'],
    },
    build: {
        outDir: '../wwwroot',
    },
    server: {
        https: true,
        strictPort: true,
        proxy: {
            '/api': { target: 'https://localhost:7212', secure: false },
            '/signalr': {
                target: 'https://localhost:7212',
                secure: false,
                ws: true,
            },
        },
    },
});
