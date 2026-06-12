import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        thinkboard: {
          primary: "#a3e635",
          "primary-content": "#101500",
          secondary: "#2dd4bf",
          "secondary-content": "#042f2e",
          accent: "#fbbf24",
          "accent-content": "#2e1b00",
          neutral: "#292524",
          "neutral-content": "#e7e5e4",
          "base-100": "#181716",
          "base-200": "#11100f",
          "base-300": "#090909",
          "base-content": "#e7e5e4",
          info: "#38bdf8",
          success: "#a3e635",
          warning: "#fbbf24",
          error: "#fb7185",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.75rem",
        },
      },
    ],
  },
};
