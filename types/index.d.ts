import { Plugin } from "vue";

declare const Vue3Filters: Vue3Filters;
export default Vue3Filters;
export type Vue3Filters = {
  mixin: {
    methods: {
      limitBy: (arr: any, n: number, offset: number) => any;
      filterBy: (arr: any[], search: string | number, ...args: any[]) => any[];
      orderBy: (arr: any, ...args: any[]) => any;
      find: (arr: any[], search: string | number, ...args: any[]) => any;
      number: (n: string | number) => any
    };
  };
} & Plugin<Vue3FiltersUseOptions>

export interface Vue3FiltersUseOptions {}
