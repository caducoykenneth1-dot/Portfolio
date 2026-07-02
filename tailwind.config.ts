import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          black: "#000000",
          950: "#0a0a0a",
          900: "#111111",
          800: "#1a1a1a",
          700: "#2a2a2a",
          500: "#666666",
          300: "#a3a3a3",
          100: "#e5e5e5",
          white: "#ffffff",
        },
      },
      // Removed marquee keyframes/animation — Tailwind v4 ignores JS keyframes.
    },
  },
  plugins: [],
} satisfies Config;
