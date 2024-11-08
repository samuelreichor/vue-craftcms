<script setup lang="ts">
  import { useCraftUrlBuilder, type Config } from '@vue-craftcms';
  import Home from './pages/home.vue';
  import News from './pages/news.vue';
  import { ref } from 'vue';
  import { CraftNotImplemented } from '@vue-craftcms';
  import Headline from './components/headline.vue';
  import { fetchData } from './helpers/utils';

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

  const uri = '__home__';
  const queryPageUrl = useCraftUrlBuilder('entries').uri(uri).buildUrl('one');
  const data = ref(await fetchData(queryPageUrl));
</script>

<template>
  <div>
    <CraftPage :config="mapping" :content="data" />
  </div>
</template>
