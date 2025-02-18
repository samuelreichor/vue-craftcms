import CraftPage from './components/CraftPage.vue';
import CraftArea from './components/CraftArea.vue';
import CraftNotImplemented from './components/CraftNotImplemented.vue';
import type { App } from 'vue';
import type { CraftCmsOptions } from './types';

export * from './composables/useCraftUrlBuilder';
export * from './composables/useApi';
export * from './types';

export { CraftPage, CraftArea, CraftNotImplemented };

export const defaultOptions: CraftCmsOptions = {
  baseUrl: '',
  registerComponents: true,
  debug: false,
  enableEntryTypeMapping: true,
};

export const CraftCms = {
  install(app: App, options: CraftCmsOptions = defaultOptions) {
    const mergedOptions: CraftCmsOptions = { ...defaultOptions, ...options };

    if (mergedOptions.registerComponents) {
      app.component('CraftPage', CraftPage);
      app.component('CraftArea', CraftArea);
      app.component('CraftNotImplemented', CraftNotImplemented);
    }

    app.provide('CraftCmsOptions', mergedOptions);
  },
};
