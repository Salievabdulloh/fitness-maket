/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'tel': '375px',
      'tab': '768px',
      'lap': '1024px'
    }
  },
  plugins: [],
}