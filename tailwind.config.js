/******** Tailwind Config ********/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f8ff",
          100: "#e0f0ff",
          200: "#b9dcff",
          300: "#8ec6ff",
          400: "#5ba7ff",
          500: "#2563eb",
          600: "#1e4fbe",
          700: "#193e94",
          800: "#142f71",
          900: "#0e214f",
        },
      },
      fontFamily: {
        sans: ["Noto Naskh Arabic", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
