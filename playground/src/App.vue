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
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
