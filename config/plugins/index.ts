import { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import WindiCSS from 'vite-plugin-windicss';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default function createVitePlugins() {
  const plugins: (Plugin | Plugin[])[] = [
    vue(),
    Components({
      resolvers: [VantResolver()],
      dirs: [
        'src/pages'
      ]
    }),
    vueJsx(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue']
    }),
    WindiCSS()
  ];

  return plugins;
}

