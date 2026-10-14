import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        laub: {
          50: "#EEF3EF",
          100: "#D5E2D7",
          200: "#ABC5AF",
          300: "#7FA486",
          400: "#54825F",
          500: "#2F5E3A",
          600: "#254C2E",
          700: "#1D3B23",
          800: "#162D1B",
          900: "#0F1F13"
        },
        erde: {
          50: "#F8F2EA",
          100: "#EDE0CD",
          200: "#DBC2A0",
          300: "#C6A172",
          400: "#B3874F",
          500: "#9A6F3C",
          600: "#7D5930",
          700: "#5F4425",
          800: "#46321B",
          900: "#2E2112"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
