const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				trueGray: colors.neutral,
				indigo: {
					500: "#0000ff",
					600: "#0000ff",
				},
			},
		},
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
			stock: [defaultTheme.fontFamily.sans],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
