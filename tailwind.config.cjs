// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
            borderWidth: {
                8: '8px',
            },
            backgroundImage: {
                'gradient-rainbow': 'linear-gradient(135deg, #f43f5e, #f97316, #eab308, #22c55e, #3b82f6, #a855f7)',
            },
        },
    },
    plugins: [],
}
