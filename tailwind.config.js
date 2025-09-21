
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "earth-background": "var(--color-earth-background)",
        "earth-primary": "var(--color-earth-primary)",
        "earth-secondary": "var(--color-earth-secondary)",
        "earth-accent": "var(--color-earth-accent)",
        "earth-highlight": "var(--color-earth-highlight)",
        "earth-text": "var(--color-earth-text)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
}


