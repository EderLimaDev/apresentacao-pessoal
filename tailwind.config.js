/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-tone': {
        '50': '#e7ffe5',
        '100': '#c8ffc7',
        '200': '#95ff95',
        '300': '#3dff44',
        '400': '#25f62f',
        '500': '#05dd14',
        DEFAULT: '#00b110',
        '700': '#058612',
        '800': '#0b6915',
        '900': '#0e5918',
        '950': '#013209',
        },
        'black-tone': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          DEFAULT: '#000000',
        },   
      }
    },
  },
  plugins: [],
}

