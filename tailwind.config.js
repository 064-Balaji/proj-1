/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#374f59",
        text: "#8e99a2",
        wwp: "#484b4e",
        checked: "#009846",
      },
    },
  },
  plugins: [],
};
