<script setup lang="ts">
  import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle, zhCN, enUS } from 'naive-ui';
  import { computed } from 'vue';

  import { useAppStore } from '@/store/app';
  import { AppProvider } from '@/providers/App';
  import { overrides } from '@/theme';

  const appStore = useAppStore();

  /** 主题 */
  const theme = computed(() => (appStore.darkTheme ? darkTheme : lightTheme));
  /** 语言环境 */
  const locale = computed(() => {
    switch (appStore.locale) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
      default:
        return enUS;
    }
  });
</script>

<template>
  <n-config-provider :locale="locale" :theme="theme" :theme-overrides="overrides" abstract>
    <n-global-style />
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>
