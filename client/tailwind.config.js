/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure TypeScript is also included if you're using it
  ],
  theme: {
    extend: {
      colors: {
        night: {
          50: "#0A0B18",
          100: "#090A16",
          200: "#080814",
          300: "#070713",
          400: "#060611",
          500: "#050612",
          600: "#04050E",
          700: "#03040B",
          800: "#020308",
          900: "#010204",
        },
        bronze: {
          50: "#F5E8D4",
          100: "#E2BC8C",
          200: "#D7A762",
          300: "#CC9247",
          400: "#C17D35",
          500: "#A46D2A",
          600: "#8C5F24",
          700: "#744F1F",
          800: "#5C3F19",
          900: "#442F13",
        },
      },
    },
    screens: {
      "3xl": "1600px",
      "2xl": "1440px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "480px",
      "max-3xl": { max: "1600px" },
      "max-2xl": { max: "1440px" },
      "max-xl": { max: "1280px" },
      "max-lg": { max: "1024px" },
      "max-md": { max: "768px" },
      "max-sm": { max: "640px" },
      "max-xs": { max: "480px" },
    },
  },
  plugins: [],
};
