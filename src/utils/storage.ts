import { LocaleType } from '@/store/app';

/** 暗黑主题 */
const darkThemeKey = 'dark-theme';
export const getLocalDarkTheme = () => {
  const localDarkTheme = localStorage.getItem(darkThemeKey);

  const isDrakTheme: boolean = localDarkTheme && JSON.parse(localDarkTheme);
  return isDrakTheme;
};
export const setLocalDarkTheme = (isDarkTheme: boolean) => {
  return localStorage.setItem(darkThemeKey, isDarkTheme.toString());
};

/** 登录凭据 */
const tokenKey = 'token';
export const getToken = () => localStorage.getItem(tokenKey) ?? '';
export const setToken = (token) => localStorage.setItem(tokenKey, token);
export const removeToken = () => localStorage.removeItem(tokenKey);

/** 缓存的最后路由跳转地址 */
const lastRouteKey = 'last-route';
export const getLastRoute = () => localStorage.getItem(lastRouteKey);
export const setLastRoute = (key) => localStorage.setItem(lastRouteKey, key);

/** 本地语言环境 */
const localeKey = 'locale';
export const getLocale = () => localStorage.getItem(localeKey) as LocaleType;
export const setLocale = (key) => localStorage.setItem(localeKey, key);
