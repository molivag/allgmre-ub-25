/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // ✅ necesario para usar dark mode con una clase
  theme: {
    extend: {
      colors: {
        earth: {
          'UBfoothead': '#f0dfc9',
          'ocean': '#1E3A5F',      // azul profundo
          'sky': '#5DADE2',        // azul cielo
          'moss': '#6C8C54',       // verde musgo
          'forest': '#2E5339',     // verde bosque oscuro
          'sand': '#D2B48C',       // arena
          'clay': '#A97457',       // arcilla
          'rock': '#5C4438',       // marrón piedra
          'background': '#F4F1ED', // fondo claro tipo tierra seca
        },
      },

    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         earth: {
//           UBfoothead: '#f0dfc9',
//           ocean: '#1E3A5F',
//           sky: '#5DADE2',
//           moss: '#6C8C54',
//           forest: '#2E5339',
//           sand: '#D2B48C',
//           clay: '#A97457',
//           rock: '#5C4438',
//           background: '#F4F1ED',
//         },
//       },
//     },
//   },
//   plugins: [],
// };
//
