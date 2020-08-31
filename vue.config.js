// https://cli.vuejs.org/zh/config/
module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		proxy: 'http://10.10.1.65:1002'
	}
};
