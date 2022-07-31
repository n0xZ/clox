/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./src/**/*.html',
		'./src/views/**/*.tsx',
		'./src/components/**/*.tsx',
	],
	theme: {
		extend: {
			fontFamily: {
				lato: 'Lato',
				inter: 'Inter',
				karla: 'Karla',
			},
		},
	},
	plugins: [require('daisyui')],
}
