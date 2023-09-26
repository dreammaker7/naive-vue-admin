<script setup lang="ts"></script>

<template>
  <n-list
    hoverable
    clickable
    style="width: 220px; height: 100%"
    :bordered="false"
    :show-divider="false"
  >
    <template #header><n-text strong>用户列表</n-text></template>
    <n-scrollbar style="height: calc(100% - 47.4px)">
      <n-list-item v-for="a in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]" :key="a">
        <n-thing>
          <template #header>
            <n-text strong>Username</n-text>
          </template>
          <template #avatar>
            <n-avatar :size="32"> Ryan </n-avatar>
          </template>
          <template #description>
            <n-text depth="3">this is a description</n-text>
          </template>
        </n-thing>
      </n-list-item>
    </n-scrollbar>
  </n-list>
</template>

<style lang="less" scoped>
  .n-list {
    .n-list-item {
      padding: 10px 16px;
    }

    :deep(.n-thing-header) {
      margin: 0;
    }
  }
</style>
