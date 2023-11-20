const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '640px', // Dispositivos móveis (>= 640px)
            md: '768px', // Tablets (>= 768px)
            lg: '1024px', // Laptops (>= 1024px)
            xl: '1280px', // Desktops (>= 1280px)
            '2xl': '1536px', // Telas grandes (>= 1536px)
        },
    },
    plugins: [],
})
