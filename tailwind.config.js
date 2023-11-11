/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.js', './**/*.php'],
	media: false,
	theme: {
		extend: {
			colors: {
				dark: {
					700: '#333333',
				},
				gray: {
					200: '#00000081',
					300: '#00000084',
				},
				blue: {
					500: '#006CA0',
					700: '#005A65',
					800: '#003642',
					900: '#003644',
				},
				green: {
					100: '#E5F0F5',
					300: '#93BD82',
					400: '#93BFB2',
				},

				body: '#333333',
				primary: '#003644',
				secondary: '#005A65',
			},

			fontFamily: {
				primary: ['Lato', 'sans-serif'],
				secondary: ['loos-normal', 'sans-serif'],
			},
			
			fontSize: {
				18: '1.125rem', // 18px
				base: '1.375rem', // 22px
				24: '1.5rem', //24
				28: '1.75rem', //28
				30: '1.875rem', //30,
				32: '2rem', //30,
				36: '2.25rem', //36
				38: '2.375rem', //38
				40: '3.25rem', //40
				48: '3rem', //48
				60: '3.75rem', //60
				72: '4.5rem', //72
			},
			zIndex: {
				1: '1'
			},
			letterSpacing: {
				'2.4' : '0.15rem'
			}
		},
	},
	plugins: [],
}
