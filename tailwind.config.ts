import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        ink: "#0A1622",
        panel: "#112238",
        panel2: "#16304C",
        hairline: "#25415E",
        gold: {
          DEFAULT: "#C89B3C",
          bright: "#E0B858",
          dim: "#8A6E2E",
        },
        cream: "#F1EDE4",
        slate: {
          light: "#B7C4D1",
          DEFAULT: "#8FA0B3",
          dark: "#5C7085",
        },
        confirm: "#4C9A6A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "url('/grain.png')",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "stamp-in": {
          "0%": { opacity: "0", transform: "scale(1.6) rotate(-12deg)" },
          "60%": { opacity: "1", transform: "scale(0.95) rotate(-8deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-8deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "stamp-in": "stamp-in 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
