/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./src/views/**/*.tsx',
		'./src/components/**/*.tsx',
	],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
}
