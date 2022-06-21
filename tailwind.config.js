module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
      Karla: ["Karla", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        explore: "url('/explore.jpg')",
        forest: "url('/forest.jpg')",
        mountains: "url('/mountains.jpg')",
        sunny: "url('/sunny.jpg')",
        winter: "url('/winter.jpg')",
      },
    },
  },
  plugins: [],
};
