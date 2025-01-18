/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Archivos en la carpeta "pages"
    "./components/**/*.{js,ts,jsx,tsx}", // Archivos en la carpeta "components"
    "./app/**/*.{js,ts,jsx,tsx}", // Si usas la carpeta "app"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
