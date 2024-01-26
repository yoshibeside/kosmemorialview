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
    colors: {
      'button-color': '#D35F74',
      'button-color-hover': '#BB5374',
      'header-color': '#FDBE71',
      'p-color': '#FFFFFF',
      'button-color-border': '#A48DFF',
      'nav-color': '#FFCC8D',
    }
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}

