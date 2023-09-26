import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { createDiscreteApi } from 'naive-ui';
import { useRoute } from 'vue-router';

import i18n from '@/locale';
import { getLocalDarkTheme, getLocale, setLocalDarkTheme, setLocale } from '@/utils/storage';

export type LocaleType = 'zh-CN' | 'en-US';

const defaultStore = {
  darkTheme: getLocalDarkTheme() ?? false,
  locale: getLocale() ?? 'en-US'
};

export const useAppStore = defineStore('app', () => {
  const route = useRoute();
  const { message } = createDiscreteApi(['message']);

  /** 当前系统暗黑主题 */
  const darkTheme = ref<boolean>(defaultStore.darkTheme);
  /** 当前语言环境 */
  const locale = ref<LocaleType>(defaultStore.locale);

  /** 初始化语言环境 */
  function initLocale(key) {
    const pageTitle = route.meta?.title as string;

    i18n.global.locale.value = key;

    document.documentElement.lang = key;
    document.title = `${i18n.global.t(pageTitle)} - ${i18n.global.t('appName')}`;

    setLocale(key);
  }

  watch(darkTheme, (isDark) => {
    setLocalDarkTheme(isDark);
  });

  watch(locale, (value: LocaleType) => {
    initLocale(value);

    message.success('切換成功');
  });

  /** init */
  initLocale(defaultStore.locale);

  return { darkTheme, locale };
});
