const path = require('path')

module.exports = {
	entry: './src/assets/js/index.js',
    mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/assets/js/'),
	},
}
