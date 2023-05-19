/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
