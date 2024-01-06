import { Plugin } from 'vite';

export const sokuLib = (): Plugin => {
  return {
    name: '@soku-conf/lib',
    config: config => {
      config.build = {
        lib: {
          entry: './src/index.ts',
          formats: ['cjs', 'es'],
          fileName: 'index',
        },
      };
      return config;
    },
  };
};

export default sokuLib;