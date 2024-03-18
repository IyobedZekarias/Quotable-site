import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'blur': 'filter'
      },
      borderWidth: {
        computerx: '0.938rem',
        computery: '1.563rem'
      },
      fontFamily: {
        georgiaSerif: "georgia, serif",
        apple: "-apple-system-short-headline, BlinkMacSystemFont, sans-serif"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-animated')
  ],
};
export default config;
