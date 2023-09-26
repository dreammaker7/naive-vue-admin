<script setup lang="ts">
  import { FormInst, useMessage, useThemeVars } from 'naive-ui';
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import { useUserStore } from '@/store/user';

  const formRef = ref<FormInst | null>(null);
  const message = useMessage();
  const router = useRouter();
  const themeVars = useThemeVars();
  const userStore = useUserStore();

  const formValues = reactive({ account: '', password: '' });
  const rules = {
    account: {
      required: true,
      min: 3,
      message: '请填写您的登录账号'
    },
    password: {
      required: true,
      min: 2,
      message: '请填写您的登录密码'
    }
  };

  const submitting = ref<boolean>(false);

  const onHandleSubmit = (e: MouseEvent) => {
    e.preventDefault();

    formRef.value
      ?.validate((errors) => {
        setTimeout(() => {
          if (!errors) {
            submitting.value = true;
            message.success('验证成功');
            userStore.token = 'xxxxxxxxxxx';

            router.push('/workspace');
          } else {
            console.log(errors);
            message.error('验证失败');
          }
        }, 300);
      })
      .finally(() => {
        submitting.value = false;
      });
  };
</script>

<template>
  <n-space vertical class="form-container">
    <n-h1 :style="{ margin: 0, color: themeVars.primaryColor }">
      {{ $t('login.title.signin') }}
    </n-h1>
    <n-text depth="3">{{ $t('login.tips.fileInfo') }}</n-text>
    <n-form ref="formRef" style="margin-top: 24px" :model="formValues" :rules="rules">
      <n-form-item path="account" :label="$t('login.label.account')">
        <n-input size="large" v-model:value="formValues.account" :disabled="submitting" />
      </n-form-item>
      <n-form-item path="password" :label="$t('login.label.password')">
        <n-input size="large" v-model:value="formValues.password" :disabled="submitting" />
      </n-form-item>
    </n-form>
    <n-button block size="large" type="primary" :loading="submitting" @click="onHandleSubmit">
      {{ $t('login.action.submit') }}
    </n-button>
    <n-divider title-placement="center" style="margin-block: 12px">
      <n-text depth="3" style="font-size: 12px; font-weight: 500">
        {{ $t('login.tips.withOther') }}
      </n-text>
    </n-divider>
    <n-button block size="large" attr-type="button" type="tertiary">Google</n-button>
    <n-p depth="3" style="margin-top: 12px; text-align: center">
      <i18n-t keypath="login.tips.service" tag="div" scope="global">
        <template #terms>
          <br />
          <router-link to="/" #="{ navigate, href }" custom>
            <n-a :href="href" @click="navigate">{{ $t('login.title.terms') }}</n-a>
          </router-link>
        </template>
        <template #policy>
          <router-link to="/" #="{ navigate, href }" custom>
            <n-a :href="href" @click="navigate">{{ $t('login.title.policy') }}</n-a>
          </router-link>
        </template>
      </i18n-t>
    </n-p>
  </n-space>
</template>

<style lang="less" scoped>
  .form-container {
    width: 100%;
  }
</style>
