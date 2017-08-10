
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
	    filename: 'mian.js',
	    path: path.resolve(__dirname, 'dist')
	},
	resolve: {
	    extensions: ['.js', '.vue', '.json'],
	    alias: {
	      'vue$': 'vue/dist/vue.common.js'
	    }
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
        		loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/
			}
		]		
	},
	plugins:[
		new htmlWebpackPlugin({
			template: 'index.html',
            hash: true
		})
	]


}