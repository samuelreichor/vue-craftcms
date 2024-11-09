<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCraftUrlBuilder, CraftNotImplemented, type Config } from '@vue-craftcms';
  import { fetchData } from './utils/fetcher';

  import Home from './views/home.vue';
  import News from './views/news.vue';
  import Headline from './components/headline.vue';

  const mapping: Config = {
    pages: {
      home: Home,
      news: News,
    },
    components: {
      headline: Headline,
      imageText: CraftNotImplemented,
    },
  };

  const route = useRoute();
  const urlBuilder = useCraftUrlBuilder('entries');
  const uri = ref(route.params.pathMatch || '__home__');
  const data = ref(await fetchData(urlBuilder.uri(uri.value).buildUrl('one')));

  watch(
    () => route.fullPath,
    async () => {
      uri.value = route.params.pathMatch || '__home__';
      data.value = await fetchData(urlBuilder.uri(uri.value).buildUrl('one'));
    },
  );
</script>

<template>
  <div>
    <CraftPage :config="mapping" :content="data" />
  </div>
</template>
