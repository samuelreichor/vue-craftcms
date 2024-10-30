import { CraftCms } from '@vue-craftcms';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(CraftCms, {
  baseUrl: 'https://backend-craftcms.ddev.site',
  debug: true,
  registerComponents: true,
});

app.mount('#app');
