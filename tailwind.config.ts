import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nokia': ['Nokia Cellphone FC', 'cursive']
      },
      colors:{
        'Nokia': '#303031'
      }
    },
  },
  plugins: [],
};
export default config;
