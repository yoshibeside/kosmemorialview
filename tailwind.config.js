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
    extend: {
      fontFamily: {
        'bitter': ['Bitter', 'serif'],
        'martionmono': ['Martion Mono', 'monospace'],
      }
    },
    colors: {
      'button-color': '#D35F74',
      'button-color-hover': '#BB5374',
      'header-color': '#FDBE71',
      'p-color': '#FFFFFF',
      'button-color-border': '#A48DFF',
      'nav-color': '#FFCC8D',
      'theme-color': 'gray',
      'card-color': '#FFFFFF',
      'link-color': '#3492eb',
      'wrong-color': 'red',
      'correct-color': 'green',
      'hover-gray-color': '#5F5A5A',
      'highlight-color': '#32a852',
      'girls-only': '#F37CAD'
    }
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}

