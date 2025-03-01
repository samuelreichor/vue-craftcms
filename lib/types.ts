import type { DefineComponent } from 'vue';

export type Config = {
  pages: Prettify<
    {
      [key: string]: Record<string, DefineComponent>;
    } & {
      Page404?: Record<string, DefineComponent>;
      Error?: Record<string, DefineComponent>;
    }
  >;
  components: {
    [key: string]: Record<string, DefineComponent>;
  };
};

export type CraftCmsOptions = {
  baseUrl: string;
  registerComponents?: boolean;
  debug?: boolean;
  enableEntryTypeMapping?: boolean;
  siteMap?: CraftSites;
};

export type CraftSite = {
  handle: string;
  origin: string;
  id?: number;
  label?: string;
  path?: string;
  lang?: string;
  primary?: boolean;
};

export type CraftSites = CraftSite[];

export type CraftAreaComponent = {
  knownKey: string;
  [key: string]: unknown;
};

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
