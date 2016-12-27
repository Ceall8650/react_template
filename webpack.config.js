var webpack = require('webpack');
var path = require('path');
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
})
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'); //優化通用的程式碼, 擷取將共用的元件與樣式, 統一放入同一個檔案, 該檔案不需重新載入, 可直接被快取

module.exports = {
	// 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
	entry: {
		main: [
		    'webpack-dev-server/client?http://127.0.0.1:8080',  // WebpackDevServer host and port
	    	'webpack/hot/only-dev-server',  //"only" 可以避免在語法錯誤時重新載入
	    	`${__dirname}/src/index.js` // Your appʼs entry point
		]
	},
    // output 是放入產生出來的結果的相關參數
	output: {
		path: `${__dirname}/build`, // 編譯後的檔案放在這個目錄
		publicPath: `/res/`,
		filename: '[name]_bundle.js'
	},
	module:{
		// loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）轉譯成瀏覽器可以閱讀的 JavaScript。
		// preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
		loaders:[
			{
				test: /\.js$/,
				loaders: ['react-hot','babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.sass$/,
				loader: 'style-loader!css-loader!sass-loader',
				include: path.join(__dirname, 'src')
			},
			{ 
				test: /\.(png|jpg)$/, 
				loader: 'url-loader?limit=8192', /// 當檔案小於 8K 的時候會產生 base64 格式的 dataURI 超過的話則直接帶連結
				include: path.join(__dirname, 'res')
			} 
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.sass', '.css']
	},
	// // devServer 則是 webpack-dev-server 設定
	// devServer:{
	// 	historyApiFallbaack: true,
	// 	hot: true,
	// 	inline: true,
	// 	progress: true
	// },
	devtool: 'sourcemap',
	// plugins 放置所使用的外掛
	plugins:[definePlugin, commonsPlugin]
};