import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

import { getLocale } from '@/utils/storage';

const EN_US_MESSAGES = formatModules(import.meta.glob('./modules/en-US/*.ts', { eager: true }));
const ZH_CN_MESSAGES = formatModules(import.meta.glob('./modules/zh-CN/*.ts', { eager: true }));

function formatModules(modulesFiles: { [key: string]: any }) {
  let modules: any = {};
  for (const path in modulesFiles) {
    const mod: { default: { [key: string]: string } } = modulesFiles[path].default;
    modules = Object.assign(modules, { ...modules, ...mod });
  }

  return modules;
}

const messages = {
  'en-US': EN_US_MESSAGES,
  'zh-CN': ZH_CN_MESSAGES
};

const i18n = createI18n<false>({
  locale: getLocale() ?? 'en-US',
  fallbackLocale: 'en-US',
  legacy: false,
  warnHtmlMessage: false,
  messages
});

export function setupLocale(app: App) {
  app.use(i18n);
}

export default i18n;
