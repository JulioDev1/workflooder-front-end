import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStops: (theme) => ({
        "custom-gradient-start": "#282EC1",
        "custom-gradient-end": "#8F3DD0",
      }),
      ringColor: (theme) => ({
        "purple-color-hover": "#6B28C1",
      }),
    },
  },
  plugins: [],
};
export default config;
