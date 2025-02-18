<script setup lang="ts">
  import { useCraft } from '@vue-craftcms';
  console.log(useCraft());
</script>

<template>
  <main>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/news-article-1">Go to News Article 1</RouterLink>
    </nav>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
