/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light Mode Defaults (Apple/Tesla inspired)
        primary: "#f5f5f7", // Light Grey Background
        secondary: "#86868b", // Subtext Grey
        tertiary: "#ffffff", // Cards/Elements White

        // Dark Mode Mappings
        "dark-bg": "#000000",
        "dark-card": "#1d1d1f",
        "dark-text": "#f5f5f7",

        // Accents
        accent: "#F6F930", // Vibrant Yellow from reference
        "accent-secondary": "#5551FF", // Deep Blue from reference
        "accent-red": "#F6F930", // Replacing Red with Yellow as primary accent
      },
      boxShadow: {
        card: "0px 10px 30px -10px rgba(0,0,0,0.1)",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
