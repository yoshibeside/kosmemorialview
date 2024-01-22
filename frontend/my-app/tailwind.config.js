/** @type {import('tailwindcss').Config} */

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

module.exports = {
  content: [
      "./index.html",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}

