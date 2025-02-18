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
  siteMap?: CraftSite;
};

export type CraftSiteValue = {
  origin: string;
  id?: number;
};

export type CraftSite<T extends string = string> = Record<T, CraftSiteValue>;

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
