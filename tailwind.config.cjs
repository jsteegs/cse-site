/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "system-ui"],
        gillsans: ["Gill Sans", "Georgia"],
      },
    colors: {
      'coyote-blue': '#005EB8',
      'cse-navy': '#101329',
    }
    },
  },
  plugins: [require("daisyui")],
};
