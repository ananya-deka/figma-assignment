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
				lightPurple: "rgba(225, 166, 255, 0.4)",
			},
			boxShadow: {
				icon: "0px 10px 40px 0px rgba(154, 148, 148, 0.25)",
				tabs: "0px 10px 30px 0px rgba(154, 148, 148, 0.25)",
				review: "0px 16px 40px 0px rgba(154, 148, 148, 0.25)",
				next: "0px 16px 40px 0px rgba(154, 148, 148, 0.25)",
			},
			backgroundImage: {
				"footer-bg": "url('./src/assets/footer.svg')",
			},
			animation: {
				slide: "slide 0.5s ease-in 1 forwards",
			},
			keyframes: {
				slide: {
					"100%": { transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [],
};
