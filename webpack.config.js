const path = require('path');
module.exports = 
{
    mode: "development",
    entry: './src/jsfiles/index.js',
    output:
    {
        filename: 'main.js',
        path:path.resolve(__dirname,'dist'),
    },
    devtool: 'inline-source-map',
    module:{
        rules: 
    [
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg)$/i,
            type: 'asset/resource',
        }
    
    ]
    }
}