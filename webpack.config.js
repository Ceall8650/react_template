var webpack = require('webpack');
var path = require('path');

module.exports = {
	// 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
	entry: [
	    'webpack-dev-server/client?http://127.0.0.1:8080',  // WebpackDevServer host and port
    	'webpack/hot/only-dev-server',  //"only" 可以避免在語法錯誤時重新載入
    	`${__dirname}/src/index.js` // Your appʼs entry point
	],
    // output 是放入產生出來的結果的相關參數
	output: {
		path: `${__dirname}/build`,
		filename: 'bundle.js'
	},
	module:{
		// loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。
		// preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
		loaders:[
			{
				test: /\.js$/,
				loaders: ['react-hot','babel-loader'],
				include: path.join(__dirname, 'src')
			}
		]
	},
	// devServer 則是 webpack-dev-server 設定
	devServer:{
		historyApiFallbaack: true,
		hot: true,
		inline: true,
		progress: true
	},
	// plugins 放置所使用的外掛
	plugins:[]
};