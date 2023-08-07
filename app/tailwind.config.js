/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        keyframes: {
            dropdown: {
                '0%': { transform: "scale(1, 0.5)"},
                '50%': { transform: "scale(1, 0.7)"},
                '100%': { transform: "scale(1, 1)"},
            }
        },
        animation: {
            dropdown: 'dropdown 100ms ease-in'
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
    },
  },
  plugins: [
    require("daisyui"),
    addDynamicIconSelectors(),
],
}
