/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15171A",
          soft: "#23262B",
        },
        crimson: {
          DEFAULT: "#C8102E",
          dark: "#960C22",
          light: "#E13650",
        },
        concrete: {
          DEFAULT: "#ECE8E0",
          dark: "#DAD5CA",
        },
        steel: {
          DEFAULT: "#6E7378",
          light: "#9BA0A5",
        },
        amber: {
          DEFAULT: "#F2A900",
        },
        paper: "#FAF9F6",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "blueprint-grid-dark":
          "linear-gradient(rgba(21,23,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,23,26,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grow-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "grow-line": "grow-line 0.9s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
