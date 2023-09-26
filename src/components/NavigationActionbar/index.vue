<script setup lang="ts">
  import { MoonOutline, SunnySharp } from '@vicons/ionicons5';

  import type { LocaleType } from '@/store/app';
  import { useAppStore } from '@/store/app';

  const props = defineProps({
    actions: {
      default: ['language', 'theme'],
      type: Array<'language' | 'theme'>
    }
  });
  const { actions } = props;
  const appStore = useAppStore();

  const localeOptions = [
    {
      label: '中文',
      value: 'zh-CN'
    },
    {
      label: 'English',
      value: 'en-US'
    }
  ];

  const handleSelect = (key: LocaleType) => {
    appStore.locale = key;
  };
</script>

<template>
  <n-space align="center" :wrap-item="false">
    <n-select
      v-if="actions.includes('language')"
      v-model:value="appStore.locale"
      size="tiny"
      placement="bottom-end"
      style="width: 80px"
      :consistent-menu-width="false"
      :options="localeOptions"
      @select="handleSelect"
    />
    <n-switch
      v-if="actions.includes('theme')"
      v-model:value="appStore.darkTheme"
      class="theme-switch"
    >
      <template #checked-icon>
        <n-icon color="#fff">
          <MoonOutline />
        </n-icon>
      </template>
      <template #unchecked-icon>
        <n-icon>
          <SunnySharp />
        </n-icon>
      </template>
    </n-switch>
  </n-space>
</template>

<style lang="less" scoped>
  .n-switch--active.theme-switch {
    :deep(.n-switch__rail) {
      background-color: #2f2f2f;
    }

    :deep(.n-switch__button) {
      background-color: var(--n-color);
    }
  }
</style>
