/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
                lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
                maven: ['Maven Pro', ...defaultTheme.fontFamily.sans],
                noto: ['Noto Sans Math', ...defaultTheme.fontFamily.sans],
                source: ['Source Code Pro', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '10xl': ['9rem', '9.25rem'],
                '11xl': ['10rem', '10.25rem'],
            }
        },
    },
    plugins: [],
}