/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/*.tsx", "./src/components/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#4776E6",
				secondary: "#8E54E9",
				purple: "#7A3199",
				lightPurple: "#E1A6FF",
			},
			boxShadow: {
				icon: "0px 10px 40px 0px rgba(154, 148, 148, 0.25)",
				tabs: "0px 10px 30px 0px rgba(154, 148, 148, 0.25)",
			},
		},
	},
	plugins: [],
};
