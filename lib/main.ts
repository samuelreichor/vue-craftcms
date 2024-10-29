import CraftPage from './components/CraftPage.vue';
import CraftArea from './components/CraftArea.vue';
import type { App } from 'vue';
import type { CraftSdkOptions } from './types';

export * from './composables/useCraftUrlBuilder';
export * from './composables/useApi';
export * from './types';

export const defaultOptions: CraftSdkOptions = {
  baseUrl: 'default.com',
  registerComponents: true,
  debug: false,
};

export const CraftSdk = {
  install(app: App, options: CraftSdkOptions = defaultOptions) {
    if (options.registerComponents) {
      app.component('CraftPage', CraftPage);
      app.component('CraftArea', CraftArea);
    }

    app.provide('CraftSdkOptions', options);

    if (options.debug) {
      console.log('Craft SDK Options:', options);
    }
  },
};
