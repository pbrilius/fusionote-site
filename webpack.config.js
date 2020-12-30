const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/_custom.scss'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      }
    ]
  },
};
