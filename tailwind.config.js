/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ed6f3e',
        'dark-brown': '#34241d',
        'cream': '#f8f6e1',
      },
    },
  },
  plugins: [],
};
