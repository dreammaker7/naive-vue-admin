<script setup lang="ts">
  import { computed } from 'vue';
  import { useThemeVars } from 'naive-ui';

  import { useAppStore } from '@/store/app';

  const appStore = useAppStore();
  const themeVars = useThemeVars();

  const sessionWindowBgColor = computed(() => {
    return appStore.darkTheme ? themeVars.value.invertedColor : 'inherit';
  });
</script>

<template>
  <n-card
    class="session-container"
    title="Anthony Liu"
    :segmented="{
      content: true,
      footer: 'soft'
    }"
    :bordered="false"
  >
    <template #header-extra> #header-extra </template>
    <n-scrollbar>
      <div class="session-content"> this is users serssion page </div>
    </n-scrollbar>
    <template #footer> #footer </template>
  </n-card>
</template>

<style lang="less" scoped>
  .session-container {
    border-left: 1px solid var(--n-border-color);
    border-radius: 0;
    height: 100%;

    :deep(.n-card__content) {
      flex: 1;
      overflow: hidden;
      padding: 0;
    }

    .session-content {
      height: 1000px;
      background-color: v-bind(sessionWindowBgColor);
    }
  }
</style>
