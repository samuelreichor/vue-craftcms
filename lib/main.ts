import CraftPage from './components/CraftPage.vue';
import CraftArea from './components/CraftArea.vue';
import CraftNotImplemented from './components/CraftNotImplemented.vue';
import type { App } from 'vue';
import type { CraftCmsOptions } from './types';

export * from './composables/useCraftUrlBuilder';
export * from './composables/useApi';
export * from './types';

export const defaultOptions: CraftCmsOptions = {
  baseUrl: '',
  registerComponents: true,
  debug: false,
};

export const CraftCms = {
  install(app: App, options: CraftCmsOptions = defaultOptions) {
    if (options.registerComponents) {
      app.component('CraftPage', CraftPage);
      app.component('CraftArea', CraftArea);
      app.component('CraftNotImplemented', CraftNotImplemented);
    }

    app.provide('CraftCmsOptions', options);

    if (options.debug) {
      console.log('Craft CMS Options', options);
    }
  },
};
