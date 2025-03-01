<script lang="ts" setup>
  import type { Config } from '../types';
  import { inject } from 'vue';
  import type { PropType } from 'vue';
  const props = defineProps({
    content: {
      type: Array as PropType<{ type: string }[]>,
      required: true,
    },
  });

  const config = inject<Config>('config');

  function getCurrentComponent(component: Object) {
    if (!config || !('components' in config)) {
      throw new Error('Configuration is missing components or invalid. Check your config object');
    }

    if (!('type' in component) || typeof component.type !== 'string') {
      throw new Error('Provided content has no valid type set. Check your queried data.');
    }

    const cName = component.type;
    const componentEl = config.components[cName];

    if (!componentEl) {
      console.error(`No mapped component found for component type: ${cName}`);
    }

    return componentEl;
  }
</script>

<template>
  <div>
    <div v-for="(component, index) in props.content" :key="index">
      <component :is="getCurrentComponent(component)" v-bind="component" />
    </div>
  </div>
</template>
