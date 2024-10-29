<div align="center">
	<a href="https://npmjs.com/package/vue-craftcms"  align="center">
		<img src="https://online-images-sr.netlify.app/assets/vue-craft-sdk.png"  alt="Vue craftcms banner">
	</a>
	<h1 align="center">vue-craftcms</h1>
  <p align="center">
    Write Craft CMS queries in vue, like in twig. 🚀🚀
  </p>
  <br />
</div>

<p align="center">
  <a href="https://npmjs.com/package/vue-craftcms">
    <img src="https://img.shields.io/npm/v/vue-craftcms/latest.svg?style=flat-square" alt="Vue craftcms latest version" />
  </a>
  <a href="https://npmjs.com/package/vue-craftcms" rel="nofollow">
    <img src="https://img.shields.io/npm/dt/vue-craftcms.svg?style=flat-square" alt="Vue craftcms downloads">
  </a>
</p>

> [!WARNING]  
> This npm package is still in production and important features may change.

## Installation

Install `vue-craftcms`

```bash
npm install -D vue-craftcms
# yarn add -D vue-craftcms
```

Register the plugin on your application (usually in main.ts) and add the baseUrl to your craft cms backend

```typescript
import { CraftSdk } from 'craft-vue-sdk';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(CraftSdk, {
  baseUrl: 'https://backend-craftcms.ddev.site',
  debug: false,
  registerComponents: true,
});

app.mount('#app');
```

## Further Resources

- [Craft CMS Plugin](https://github.com/samuelreichor/craft-query-api)
- [Core JS Querybuilder](https://github.com/samuelreichor/js-craftcms-api)
- [Nuxt Craft](https://github.com/samuelreichor/nuxt-craft)

## Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).

## Contributing

Contributions are welcome! <3
