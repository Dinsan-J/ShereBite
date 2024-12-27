/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "shine-line": "shineLine 2s linear infinite", // Shine line animation
        blink: "blink 2s infinite", // Blink animation
      },
      keyframes: {
        shineLine: {
          "0%": { backgroundPosition: "-200% 0" }, // Line starts from the left
          "100%": { backgroundPosition: "200% 0" }, // Line moves to the right
        },
        blink: {
          "0%, 100%": { opacity: 1 }, // Full opacity
          "50%": { opacity: 0 }, // Half opacity (blink effect)
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
