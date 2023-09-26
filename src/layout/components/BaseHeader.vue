<script setup lang="ts">
  import { h } from 'vue';
  import type { Component } from 'vue';
  import { useRouter } from 'vue-router';
  import { NAvatar, NText, NIcon, useMessage, useDialog } from 'naive-ui';
  import { BookOutline, LogOutOutline } from '@vicons/ionicons5';
  import { UserOutlined, SettingOutlined } from '@vicons/antd';

  import { useUserStore } from '@/store/user';

  const renderIcon = (icon: Component) => () => h(NIcon, null, { default: () => h(icon) });
  const renderCustomHeader = () => {
    return h(
      'div',
      {
        style: 'display: flex; align-items: center; padding: 8px 12px;'
      },
      [
        h(NAvatar, {
          round: true,
          style: 'margin-right: 12px;',
          src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
        }),
        h('div', null, [
          h('div', null, [h(NText, { depth: 2 }, { default: () => '打工仔' })]),
          h('div', { style: 'font-size: 12px;' }, [
            h(NText, { depth: 3 }, { default: () => '毫无疑问，你是办公室里最亮的星' })
          ])
        ])
      ]
    );
  };

  const message = useMessage();
  const userStore = useUserStore();
  const dialog = useDialog();
  const router = useRouter();

  const options = [
    {
      key: 'header',
      type: 'render',
      render: renderCustomHeader
    },
    {
      key: 'header-divider',
      type: 'divider'
    },
    {
      label: '我的信息',
      icon: renderIcon(UserOutlined),
      key: 'stmt1'
    },
    {
      label: '系统设置',
      icon: renderIcon(SettingOutlined),
      key: 'stmt2'
    },
    {
      type: 'divider',
      key: 'd1'
    },
    {
      label: '退出登录',
      icon: renderIcon(LogOutOutline),
      key: 'logout'
    }
  ];

  const handleSelect = (key: string | number) => {
    switch (key) {
      case 'logout': {
        dialog.create({
          title: '系统提示',
          content: '正在操作退出登录，是否继续？',
          positiveText: '确定',
          negativeText: '取消',
          onPositiveClick: () => {
            userStore.token = '';
            router.push('/login');
          }
        });
        return;
      }
    }
    message.info(String(key));
  };
</script>

<template>
  <n-layout-header bordered position="absolute" style="z-index: 99">
    <n-space align="center" justify="space-between">
      <n-breadcrumb>
        <n-breadcrumb-item> <n-icon :component="BookOutline" /> 北京总行</n-breadcrumb-item>
        <n-breadcrumb-item> <n-icon :component="BookOutline" /> 天津分行</n-breadcrumb-item>
        <n-breadcrumb-item> <n-icon :component="BookOutline" /> 平山道支行</n-breadcrumb-item>
      </n-breadcrumb>
      <n-space align="center">
        <navigation-actionbar :actions="['theme']" />
        <n-dropdown
          trigger="hover"
          placement="bottom-end"
          :options="options"
          @select="handleSelect"
        >
          <n-button quaternary bordered>
            <template #icon>
              <n-avatar style="background-color: red; color: #fff" :size="18">Ryan</n-avatar>
            </template>
            <n-text strong>Ryan</n-text>
          </n-button>
        </n-dropdown>
      </n-space>
    </n-space>
  </n-layout-header>
</template>

<style lang="less" scoped></style>
