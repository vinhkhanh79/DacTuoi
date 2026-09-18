import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F3F6EE",
          100: "#E3EBD8",
          200: "#C6D8B2",
          300: "#A3C085",
          400: "#7FA65C",
          500: "#5E8A42",
          600: "#456B30",
          700: "#345226",
          800: "#243A1B",
          900: "#182813",
        },
        moss: {
          500: "#4A6B4A",
          600: "#3B5638",
        },
        ivory: {
          50: "#FDFCF8",
          100: "#F8F4E9",
          200: "#F1EAD6",
        },
        wood: {
          400: "#A9825F",
          500: "#8B6544",
          600: "#6E4E34",
        },
        gold: {
          300: "#E8CE95",
          400: "#D9B872",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-be-vietnam)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        organic: "28px",
        "organic-sm": "18px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(36, 58, 27, 0.25)",
        card: "0 12px 32px -12px rgba(36, 58, 27, 0.18)",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-2deg) translateY(0px)" },
          "50%": { transform: "rotate(2deg) translateY(-6px)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "100%": { transform: "translate(-14px, 18px) rotate(8deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite alternate",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
