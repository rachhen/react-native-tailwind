module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '~': './app',
        },
      },
    ],
  ],
};
