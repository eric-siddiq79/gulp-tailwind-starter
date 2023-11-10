/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				dark: {
					700: "#333333",
				},
				gray: {
					200: "#00000081",
					300: "#00000084",
				},
				blue: {
					500: "#006CA0",
					700: "#005A65",
					800: "#003642",
					900: "#003644",
				},
				green: {
					300: "#93BD82",
					400: "#93BFB2",
				},
			},

			fontFamily: {
				primary: ["Lato", "sans-serif"],
				secondary: ["Lato", "sans-serif"],
			},
			fontSize: {
				base: "1.375rem", // 22px
				"h1-xl": "4.375rem", // 70px
				h1: "3.75rem", // 60px
				"h1-sm": "3.25rem", // 40px
				h2: "3rem", //48px
				"h2-sm": "2.25rem", //36px
			},
		},
	},
	plugins: [],
};
