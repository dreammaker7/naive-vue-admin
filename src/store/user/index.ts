import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

import { getToken, setToken } from '@/utils/storage';

/** 用户信息 */
export const useUserStore = defineStore('user', () => {
  const token = ref<string>(getToken());

  const saveToken = (newToken: string) => {
    token.value = newToken;
  };

  /** token 变化后同步 storage */
  watch(token, (token) => {
    setToken(token);
  });

  return { token, saveToken };
});
