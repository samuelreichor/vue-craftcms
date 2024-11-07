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

  function getCurrentSectionHandle(): string {
    if (!('sectionHandle' in props.content)) {
      return '404';
    }
    return props.content.sectionHandle;
  }

  function getCurrentPage() {
    const currentSectionHandle = getCurrentSectionHandle();
    if (currentSectionHandle === '404') {
      return getErrorPage('404');
    }
    if (!props.config || !('pages' in props.config)) {
      return getErrorPage('500');
    }

    const pageComponent = props.config.pages[currentSectionHandle];
    if (!pageComponent) {
      return getErrorPage('404');
    }

    return pageComponent;
  }

  function getErrorPage(errorCode: '404' | '500') {
    const pageKey = `Page${errorCode}`;
    if (props.config && props.config.pages[pageKey]) {
      return props.config.pages[pageKey];
    }

    if (props.config && props.config.pages['Error']) {
      return props.config.pages['Error'];
    }

    throw new Error(`Error: No page component mapped for error code: ${errorCode}`);
  }

  provide('config', props.config);
</script>

<template>
  <div>
    <component :is="getCurrentPage()" v-bind="props.content" />
  </div>
</template>
