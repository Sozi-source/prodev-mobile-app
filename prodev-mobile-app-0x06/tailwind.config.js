/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",      // Root entry
    "./app/**/*.{js,jsx,ts,tsx}", // Expo Router screens
    "./components/**/*.{js,jsx,ts,tsx}", // Reusable components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
