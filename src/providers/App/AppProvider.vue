<script setup lang="ts">
  import { NDialogProvider, NNotificationProvider, NMessageProvider } from 'naive-ui';
</script>

<template>
  <n-dialog-provider>
    <n-notification-provider>
      <n-message-provider>
        <slot name="default"></slot>
      </n-message-provider>
    </n-notification-provider>
  </n-dialog-provider>
</template>
