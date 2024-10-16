var path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development', // 또는 'production', development는 크기 경고가 나오니 사용한다
    context: path.resolve(__dirname, 'src/main/react'),
    entry: {
        main: './Main.js', //여러페이지 설정이 가능함
        user: './User.js',


    },
    devtool: 'sourcemaps',
    cache: true,
    output: { //파일이 생성되는 경로
        path: __dirname,
        filename: './src/main/resources/static/bundle/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/, // .mjs 또는 .js 파일을 처리
                resolve: {
                    fullySpecified: false // 확장자를 명시하지 않아도 되도록 설정(특히 axios나 다른 모듈에서 발생하는 확장자 문제를 피할 수 있다.)
                }
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // 이미지 파일에 대한 규칙
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // 파일 이름 설정
                            context: 'src/main/react', // 소스 경로 설정
                        },
                    },
                ],
            }
        ]
    },

    plugins: [
        // fix "process is not defined" error:
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};