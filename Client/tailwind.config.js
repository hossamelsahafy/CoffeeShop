/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', "sans-serif"],
      },
      screens: {
        sm: "640px", // Default small screen
        md: "768px", // Default medium screen
        lg: "990px", // Custom large screen (instead of default 1024px)
        xl: "1200px", // Extra large
        "2xl": "1536px", // Default 2xl screen
      },
    },
  },
  plugins: [],
};
