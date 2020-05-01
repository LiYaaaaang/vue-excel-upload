module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
        proxy: 'http://127.0.0.1:3000'
    }
};