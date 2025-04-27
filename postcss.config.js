// @ts-nocheck posstcss-plugin has some problems with types
import stylexPlugin from '@stylexjs/postcss-plugin';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    stylexPlugin({
      include: ['./**/*.{js,jsx,ts,tsx}'],
      useCSSLayers: true,
    }),
    autoprefixer(),
  ],
};
