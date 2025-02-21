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
};

export type CraftSites = CraftSite[];

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
