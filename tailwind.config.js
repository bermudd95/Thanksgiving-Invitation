/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				background:
					"url('src/assets/Thanksgiving Background.jpg')",
			},
			colors: {
				orange: {
					500: "#FB923C",
					600: "#EA580C",
				},
			},
		},
	},
	plugins: [],
};
