import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default () => {
  return createSvgIconsPlugin({
    // 缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/icons')],
    // Symbol ID
    // symbolId: 'icon-[dir]-[name]',
    // 插入位置
    inject: 'body-last',
    // DOM ID
    customDomId: '__svg__icons__dom__'
  });
};
