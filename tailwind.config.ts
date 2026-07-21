import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        surface: "#111A2E",
        "surface-2": "#182238",
        line: "#243046",
        paper: "#EDF1F7",
        muted: "#8B96AC",
        signal: "#4F7FFF",
        "signal-soft": "#3A5FCC",
        pulse: "#FFB020",
        "pulse-soft": "#7A5620",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(255,176,32,0.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(255,176,32,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,176,32,0)" },
        },
        "dash-travel": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
