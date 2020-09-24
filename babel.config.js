module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
          ],
          alias: {
            '_screens': './src/screens',
            '_assets': './src/assets',
            '_components': './src/components',
            '_utils': './src/utils',
            '_locales': './src/locales',
            '_services': './src/services',
            '_store': './src/store',
            '_constants': './src/constants',
          },
        },
      ],
    ],
  };
};
