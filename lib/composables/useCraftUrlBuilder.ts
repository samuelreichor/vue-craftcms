import { buildCraftQueryUrl } from 'js-craftcms-api';
import { useCraft } from './useApi';
import type { ElementType, ExecutionMethod } from 'js-craftcms-api';

export function useCraftUrlBuilder<T extends ElementType>(elementType: T) {
  const queryBuilder = buildCraftQueryUrl(elementType);
  const { baseUrl, debug } = useCraft();

  return {
    ...queryBuilder,

    buildUrl(execOpt: ExecutionMethod) {
      const queryUrl = queryBuilder.buildBaseUrl(execOpt);
      const url = `${baseUrl}${queryUrl}`;

      if (debug) {
        console.log('The built url is: ' + url);
      }
      return url;
    },
  };
}
