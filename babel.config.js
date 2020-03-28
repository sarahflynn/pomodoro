module.exports = api => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            chrome: '67',
            edge: '17',
            firefox: '60',
            safari: '11.1',
          },
          useBuiltIns: false,
        },
      ],
      ['@babel/preset-react'],
      ['@babel/preset-typescript'],
    ],
    plugins: [['@babel/plugin-proposal-class-properties']],
  };
};
