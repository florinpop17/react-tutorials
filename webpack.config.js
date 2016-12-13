module.exports = {
    entry: './public/js/app.js',
    output: {
        path: __dirname,
        filename: './public/js/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};