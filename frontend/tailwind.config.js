/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3880F5",
        "text-dark": "#121417",
        "text-light": "#61708A",
        "background-light": "#FAFAFA",
        "background-white": "#FFFFFF",
        "border-color": "#D4D9E3",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      fontSize: {
        h1: ["64px", { letterSpacing: "-2px" }],
        h2: "22px",
        h3: "18px",
        body: "16px",
        small: "14px",
      },
      lineHeight: {
        body: "24px",
      },
      borderRadius: {
        button: "12px",
        input: "12px",
        card: "12px",
      },
      boxShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
