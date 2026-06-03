import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#d7efff",
          200: "#b5dfff",
          300: "#84c7ff",
          400: "#4ea8ff",
          500: "#2e8ff2",
          600: "#1f73ca"
        },
        navy: {
          700: "#2a4d79",
          800: "#213f66",
          900: "#1a2f4f"
        },
        cream: {
          50: "#fffdf7",
          100: "#fff8ea",
          200: "#ffefce"
        },
        meadow: {
          200: "#c5edcf",
          300: "#a6dfb4",
          500: "#59b977"
        }
      },
      fontFamily: {
        display: ["'Nunito'", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["'Nunito'", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        story: "0 16px 40px rgba(46, 143, 242, 0.18)",
        soft: "0 10px 24px rgba(17, 24, 39, 0.08)"
      },
      borderRadius: {
        story: "1.5rem"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        sparkle: {
          "0%, 100%": { opacity: "0.6", transform: "scale(0.95)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        sparkle: "sparkle 2.5s ease-in-out infinite",
        reveal: "reveal 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
