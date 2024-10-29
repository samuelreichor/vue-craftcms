import { inject } from 'vue';
import type { CraftSdkOptions } from '../types';

export function useCraft(): CraftSdkOptions {
  return inject<CraftSdkOptions>('CraftSdkOptions')!;
}
