module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        second: "#111827",
        text: "#ffffff",
        border: "#374151",
        muted: "#9CA3AF",
        primary: "#3B82F6",
        success: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
};
