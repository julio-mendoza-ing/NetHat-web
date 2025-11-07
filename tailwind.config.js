// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // 💡 ESTA LÍNEA es la más importante. Debe coincidir con la estructura de tu proyecto.
    // Si tus archivos están en 'src', usa esta línea:
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}