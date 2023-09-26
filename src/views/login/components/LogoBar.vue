<script setup lang="ts">
  import { useThemeVars } from 'naive-ui';
  import { CustomerServiceTwotone } from '@vicons/antd';

  const themeVars = useThemeVars();
  const props = defineProps({
    iconSize: String,
    fontSize: {
      type: String,
      default: '50px'
    }
  });

  const { iconSize, fontSize } = props;
</script>

<template>
  <n-space size="small" :wrap-item="false" align="center">
    <n-icon :color="themeVars.textColorBase" :size="iconSize" style="transition: all 0.3s">
      <CustomerServiceTwotone />
    </n-icon>
    <a href="/" style="text-decoration: none">
      <n-h4 :style="{ margin: 0, fontSize }">
        <n-text type="primary" :style="{ color: themeVars.textColorBase, fontWeight: 500 }">
          Naive Vue Admin
        </n-text>
      </n-h4>
    </a>
  </n-space>
</template>
