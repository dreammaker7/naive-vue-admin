import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import BaseLayout from '@/layout/index.vue';
import i18n from '@/locale';
import { getToken, setLastRoute } from '@/utils/storage';

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: 'modules.login'
    }
  },
  {
    path: '/',
    component: BaseLayout,
    meta: { requiresAuth: true },
    redirect: '/workspace',
    children: [
      {
        path: 'workspace',
        name: 'Workspace',
        component: () => import('@/views/workspace/index.vue'),
        meta: {
          title: 'modules.workspace',
          requiresAuth: true
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/users/index.vue'),
        meta: {
          title: 'modules.users',
          requiresAuth: true
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(({ meta, name, fullPath }, _from, next) => {
  const { title, requiresAuth }: { title?: string; requiresAuth?: boolean } = meta;
  const isAuthenticated = getToken();

  if (title) document.title = `${i18n.global.t(title)} - ${i18n.global.t('appName')}`;

  /** 已登录跳转登陆页面，重定向首页 */
  if (isAuthenticated && name === 'Login') {
    next({ path: '/' });
  }

  /** token 不存在时跳转非登录页，重定向到登录页 */
  if (!isAuthenticated && name !== 'Login' && requiresAuth) {
    /** 保存路由，用作登录后跳回 */
    setLastRoute(fullPath);
    next({ path: '/login' });
  } else {
    /** 其他场景，正常跳转 */
    next();
  }
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
