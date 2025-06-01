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
    <img src="https://img.shields.io/npm/v/vue-craftcms?color=blue" alt="Vue craftcms latest version" />
  </a>
  <a href="https://npmjs.com/package/vue-craftcms" rel="nofollow">
    <img src="https://img.shields.io/npm/d18m/vue-craftcms?color=blue" alt="Vue craftcms downloads">
  </a>
  <a href="https://npmjs.com/package/vue-craftcms" rel="nofollow">
    <img src="https://img.shields.io/github/license/samuelreichor/vue-craftcms?color=blue" alt="Vue craftcms license">
  </a>
</p>

> [!WARNING]
> This package is no longer actively maintained. Please use the new **[`@query-api/vue`](https://github.com/samuelreichor/query-api/tree/main/packages/vue)** instead. It's designed to be a drop-in replacement.

-----

## Why the Change?

Hi there! If you've found this package, thanks so much for checking it out. I've recently re-evaluated my code architecture and decided to adopt a monorepo approach for all the JavaScript SDKs. This change allows for better maintainability and collaboration across related projects.

The package you're likely looking for is the new **[`@query-api/vue`](https://github.com/samuelreichor/query-api/tree/main/packages/vue)**. It's designed to seamlessly replace `vue-craftcms`.

-----

## Migration Guide

Migrating to the new package is straightforward:

1.  **Update Imports:** Replace all instances of `vue-craftcms` in your import statements with `@query-api/vue`.
    ```typescript
    // Before
    import { someFeature } from 'vue-craftcms';
    // After
    import { someFeature } from '@query-api/vue';
    ```

-----

## Need Help?

I apologize for any inconvenience this transition may cause. If you encounter any issues during the migration or have questions, please don't hesitate to reach out\!

Happy coding!