/** @type {import('tailwindcss').Config} */
export default {
    // Enable class-based dark mode.  The `dark` class will be toggled on
    // the html element by the Navbar component.
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
