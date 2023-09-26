// Inter 字体
import 'vfonts/Inter.css';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';

import App from './App.vue';
import { setupStore } from './store';
import router, { setupRouter } from './router';
import { setupLocale } from './locale';

import './app.css';

async function bootstrap() {
  const app = createApp(App);

  // 挂载状态管理
  setupStore(app);

  // 挂载路由
  setupRouter(app);

  // 语言环境
  setupLocale(app);

  // 路由准备就绪后挂载 APP 实例
  // https://router.vuejs.org/api/interfaces/router.html#isready
  await router.isReady();

  app.mount('#app');
}

void bootstrap();
