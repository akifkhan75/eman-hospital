import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc5fb",
          400: "#38a4f6",
          500: "#0e87e6",
          600: "#005ea8", // Brand Primary matching logo
          700: "#004b87",
          800: "#003e6f",
          900: "#06355d",
          950: "#04223e",
        },
        roseAccent: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f472b6",
          400: "#e11d48",
          500: "#be185d", // Emblem Accent matching logo
          600: "#9d174d",
          700: "#831843",
          800: "#701a75",
          900: "#500724",
        },
        medicalTeal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 94, 168, 0.08)",
        card: "0 10px 30px -4px rgba(0, 94, 168, 0.1)",
        elevated: "0 20px 40px -8px rgba(0, 75, 135, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
