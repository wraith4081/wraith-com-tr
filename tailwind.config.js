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
            }
        },
    },
    plugins: [],
}