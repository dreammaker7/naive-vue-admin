import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

import createSVGPlugin from './svg';
import createAutoImportPlugin from './autoImport';

export function createVitePlugins() {
  return [
    vue({
      template: {
        compilerOptions: {
          // lottie-player 配置为自定义组件
          isCustomElement: (tag) => tag.includes('lottie-player')
        }
      }
    }),
    createSVGPlugin(),
    createAutoImportPlugin(),
    Components({ resolvers: [NaiveUiResolver()] })
  ];
}
