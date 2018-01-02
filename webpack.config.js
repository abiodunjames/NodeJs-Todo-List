module.exports={

    entry:'./public/dist/main.js',
    output: {
        filename:'./public/build/js/bundle.js'
    },
    resolve: {

        alias: {
            vue: './vue.js'
        }
    },
    module:{
        loaders:[
            {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/
            },
            {
                test:/\.vue/,
                exclude:/(node_modules|bower_components)/,
                use: {
                    loader:'vue-loader'
                }
            }
        ]
    },
    devServer: {
     port:3000
    },
    
    
}