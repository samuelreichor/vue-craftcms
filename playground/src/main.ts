import { CraftCms } from '@vue-craftcms';
import { router } from './router';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(router).use(CraftCms, {
  baseUrl: 'https://backend-craftcms.ddev.site:8443',
  debug: true,
  registerComponents: true,
  enableEntryTypeMapping: true,
  siteMap: [
    {
      handle: 'en',
      path: '/',
      origin: 'https://localhost:3000',
      id: 3,
    },
  ],
});

app.mount('#app');
