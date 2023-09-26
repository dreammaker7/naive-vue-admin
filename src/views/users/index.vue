<script setup lang="ts">
  import SessionList from './components/SessionList.vue';
  import SessionWindow from './components/SessionWindow.vue';
</script>

<template>
  <n-space class="users-container" :size="0" :wrap-item="false">
    <session-list />
    <n-layout-content
      style="height: 100%"
      content-style="height: 100%"
      :native-scrollbar="false"
      :scrollbar-props="{ trigger: 'none' }"
    >
      <session-window />
    </n-layout-content>
  </n-space>
</template>

<style lang="less" scoped>
  .users-container {
    height: 100%;
  }
</style>
