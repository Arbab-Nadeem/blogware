/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				color: {
					1: '#1a8917',
					2: '#FFC017',
					3: '#242424',
					4: '#7ADB78',
					5: '#525ce4',
					6: '#dc2626',
					7: '#156d12',
				},
				n: {
					1: '#FFFFFF',
					2: '#F2F2F2',
					3: '#f8f9fc',
					4: '#f1f3f9',
					5: '#dee3ed',
					6: '#c2c9d6',
					7: '#8f96a3',
					8: '#5e636e',
					9: '#2f3237',
					10: '#1d1e20',
					11: '#111213',
				},
			},
			backgroundImage: {
				g1: 'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
			},
		},
	},
	plugins: [],
};
