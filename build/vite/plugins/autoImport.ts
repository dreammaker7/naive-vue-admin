import AutoImport from 'unplugin-auto-import/vite';

export default () => {
  return AutoImport({
    imports: [
      'vue',
      {
        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
      }
    ]
  });
};
