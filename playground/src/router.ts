import { createMemoryHistory, createRouter } from 'vue-router';

import CraftRouter from './CraftRouter.vue';

const routes = [{ path: '/:pathMatch(.*)*', name: 'CraftRouter', component: CraftRouter }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
