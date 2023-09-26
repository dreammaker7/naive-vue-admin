<script setup lang="ts">
  import { Component, h, ref } from 'vue';
  import type { MenuOption } from 'naive-ui';
  import { NIcon } from 'naive-ui';
  import { RouterLink } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { BookOutline, DesktopOutline } from '@vicons/ionicons5';
  import { UsergroupAddOutlined } from '@vicons/antd';

  import BaseHeader from './components/BaseHeader.vue';

  const { t } = useI18n();
  const collapsed = ref<boolean>(false);

  function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
  }

  function getLinkMenuItem(options: { to: string; label: string }) {
    const { to, label } = options;

    return h(RouterLink, { to }, { default: () => label });
  }

  const menuOptions: MenuOption[] = [
    {
      label: () => getLinkMenuItem({ to: '/workspace', label: t('modules.workspace') }),
      key: 'pinball-1973',
      icon: renderIcon(DesktopOutline)
    },
    {
      label: () => getLinkMenuItem({ to: '/users', label: t('modules.users') }),
      key: 'hear-the-wind-sing',
      icon: renderIcon(UsergroupAddOutlined)
    },
    ...new Array(15).fill(1).map((_, index) => ({
      label: 'Page',
      key: 'a-wild-sheep-chase' + index,
      icon: renderIcon(BookOutline)
    }))
  ];
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      inverted
      bordered
      show-trigger
      collapse-mode="width"
      :collapsed-width="64"
      :width="200"
      :collapsed="collapsed"
      :native-scrollbar="false"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        inverted
        :root-indent="24"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout content-style="padding-top: 47px">
      <base-header />
      <n-layout-content content-style="height: 100%" :native-scrollbar="false">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
  .n-layout {
    height: 100%;

    .n-layout-header {
      padding: 6px 12px;
    }

    .n-layout-footer {
      padding: 24px;
    }

    .n-layout-content {
      overflow: auto;
    }
  }
</style>
