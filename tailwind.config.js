/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js, tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class",
};
