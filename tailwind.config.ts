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
        bgdark: "#001d3a",
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
      boxShadow: {
        xl: "0 10px 60px -10px rgba(0, 56, 113, 0.75)",
        "2xl": "0 10px 60px -10px rgba(242, 150, 155, 0.75)",
      },
      fontSize: {
        sm: "0.800rem",
        md: "0.9rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
