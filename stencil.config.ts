import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'disqus',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www'
    }
  ]
};
