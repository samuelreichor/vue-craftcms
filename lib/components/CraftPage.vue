<script lang="ts" setup>
  import { provide } from 'vue';
  import type { Config } from '../types';
  import type { PropType } from 'vue';

  const props = defineProps({
    config: {
      type: Object as PropType<Config>,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
  });

  function handleError(code: '404', msg: string) {
    const pageKey = `Page${code}`;
    if (props.config && props.config.pages[pageKey]) {
      return props.config.pages[pageKey];
    }

    if (props.config && props.config.pages['Error']) {
      return props.config.pages['Error'];
    }

    throw new Error(msg);
  }

  function getCurrentPage() {
    if (!props.config || !('pages' in props.config)) {
      throw new Error('Configuration is missing pages or invalid. Check your config object.');
    }

    if (!('sectionHandle' in props.content)) {
      return handleError(
        '404',
        'Section handle not found in queried data. Check your query or prevent that by defining an Error Page.',
      );
    }

    const currentSectionHandle = props.content.sectionHandle;
    const pageComponent = props.config.pages[currentSectionHandle];

    if (!pageComponent) {
      console.error(`No mapped Page found for page: ${currentSectionHandle}`);
    }

    return pageComponent;
  }

  provide('config', props.config);
</script>

<template>
  <div>
    <component :is="getCurrentPage()" v-bind="props.content" />
  </div>
</template>
