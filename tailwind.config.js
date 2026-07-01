/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        lavender: "#F5F0FF",
        purple: {
          light: "#BFA6F8",
          mid: "#7A44DC",
          deep: "#5F2ACB",
          dark: "#271A39",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["3.875rem", { lineHeight: "1.1", letterSpacing: "-0.0775em", fontWeight: "700" }],
        h2: ["3rem", { lineHeight: "1.15", letterSpacing: "-0.06em", fontWeight: "700" }],
        h3: ["2.375rem", { lineHeight: "1.2", letterSpacing: "-0.0475em", fontWeight: "700" }],
        h4: ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.0375em", fontWeight: "700" }],
        "body-1": ["1.125rem", { lineHeight: "1.4", letterSpacing: "0em" }],
        "body-2": ["1rem", { lineHeight: "1.45", letterSpacing: "0em" }],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};
