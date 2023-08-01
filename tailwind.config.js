/** @type {import('tailwindcss').Config} */
import colors, { black, emerald, gray, rose, white } from 'tailwindcss/colors'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      "main": {
        "10": rose[500],
        "30": gray[400],
        "60": white,
      },
      "secondary": {
        "highlight": "#0f0f0f",
        "round": "#131313",
        "hover": "#1e1e1e",
        "background": black,
      },
      "play": emerald[500],
    },
    extend: {},
  },
  plugins: [],
}

