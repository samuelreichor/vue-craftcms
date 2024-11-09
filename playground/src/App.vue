<script setup lang="ts">
  import { useCraftUrlBuilder } from '@vue-craftcms';
  import { onMounted, ref } from 'vue';

  const data = ref<unknown>();
  const queryEntry = useCraftUrlBuilder('entries');

  const queryNewsUrl = ref('');

  const queryEntryUrl = useCraftUrlBuilder('entries')
    .slug('news-article-1')
    .section('news')
    .buildUrl('one');
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
