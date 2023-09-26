<script setup lang="ts">
  import { computed } from 'vue';
  import { useThemeVars } from 'naive-ui';

  import { useAppStore } from '@/store/app';

  import LoginForm from './components/LoginForm.vue';
  import LogoBar from './components/LogoBar.vue';

  const appStore = useAppStore();
  const themeVars = useThemeVars();

  const coverBgColor = computed(() => {
    return appStore.darkTheme ? 'rgba(127,127,127,0.2)' : themeVars.value.primaryColor;
  });
</script>

<template>
  <n-layout
    class="page-container"
    content-style="display: flex; height: 100vh;"
    :native-scrollbar="false"
  >
    <n-layout-content class="cover-block" content-style="display: flex; flex-direction: column;">
      <logo-bar icon-size="28" font-size="20px" />
      <div class="lottie-player">
        <lottie-player
          autoplay
          loop
          speed="0.5"
          mode="normal"
          src="./lotties/lottie-service.json"
        />
      </div>
    </n-layout-content>
    <n-layout class="form-block" content-style="display: flex; flex-direction: column;">
      <n-layout-header>
        <div class="logobar-mobile">
          <logo-bar icon-size="20" font-size="16px" />
        </div>
        <navigation-actionbar :actions="['language', 'theme']" />
      </n-layout-header>
      <n-layout-content content-style="display: flex; justify-content: center;">
        <div class="form-box">
          <login-form />
        </div>
      </n-layout-content>
      <n-layout-footer>By Fontdo</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
  .page-container {
    height: 100vh;
    overflow: hidden;
    .cover-block {
      height: 100%;
      padding: 16px 24px 72px;
      border-radius: 0 0 100px 0;
      background: v-bind(coverBgColor);
      border-top: none;
      border-left: none;
      flex: 1.5;
      transition: all 0.3s;
      overflow: hidden;

      .lottie-player {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        > * {
          width: 600px;
          height: 600px;
        }
      }
    }

    .form-block {
      flex: 1;

      .n-layout-header,
      .n-layout-footer {
        padding: 16px 24px;
        display: flex;
        background-color: transparent;
        justify-content: center;
      }

      .n-layout-header {
        justify-content: space-between;
      }

      .logobar-mobile {
        opacity: 0;
        transition: opacity 0.3s;
      }

      .form-box {
        margin-top: 50px;
        width: 360px;
        padding: 0 24px;
      }
    }

    @media screen and (max-width: 1200px) {
      .cover-block {
        flex: 1;
      }
    }

    @media screen and (max-width: 1000px) {
      .cover-block {
        flex: 0.7;
      }
    }

    @media screen and (max-width: 900px) {
      .cover-block {
        display: none;
      }

      .form-block {
        .logobar-mobile {
          opacity: 1;
        }

        .form-card {
          margin-top: 30px;
        }
      }
    }
  }
</style>
