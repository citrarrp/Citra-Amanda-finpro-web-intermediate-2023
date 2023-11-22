import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        dark: "#003871",
        light: "#f2969b",
        bgdark: "#001d3a",
      },
      colors: {
        dark: "#003871",
        light: "#f2969b",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bolds: "700",
        extrabold: "800",
      },
      borderColor: {
        dark: "#003871",
        light: "#f2969b",
      },
    },
  },
  plugins: [],
};
export default config;
