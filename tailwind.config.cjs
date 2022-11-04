/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#005eb8",
          secondary: "#c748ea",
          accent: "#8eedaf",
          neutral: "#17161D",
          "base-100": "#101329",
          info: "#5865F2",
          success: "#60E1A5",
          warning: "#FCDC69",
          error: "#EA3A1F",
          "base-content": "#FAFAF9",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        gillsans: ["Gill Sans", "sans-serif"],
      },
      colors: {
        "coyote-blue": "#005EB8",
        "cse-navy": "#101329",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-animate"),
  ],
};
