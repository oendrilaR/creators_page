/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				comme: ["Comme", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				marcellus: ["Marcellus", "serif"],
				Space_Grotesk: ["Space Grotesk", "sans-serif"],
				work_sans: ["Work Sans", "sans-serif"],
			},
			boxShadow: {
				neomorphism:
					"8px 8px 12px -2px rgba(72, 79, 96, 0.4), -6px -6px 12px -1px white",
				"neomorphism-active":
					"inset -4px -4px 6px -1px white, inset 2px 2px 8px -1px rgba(72, 79, 96, 0.5)",
				"toggle-active":
					"inset -4px -4px 6px -1px rgb(56, 189, 248), inset 2px 2px 8px -1px rgba(72, 79, 96, 0.5)",
				"neomorphism-inset-hover":
					"inset -4px -4px 6px -1px white, inset 1px 1px 4px -1px rgba(72, 79, 96, 0.5)",
				toggle: "0px 1px 2px rgba(72, 79, 96, 0.5)",
			},
		},
	},
	plugins: [],
};
