/// <reference types="vite/client" />
/** biome-ignore-all lint/complexity/noBannedTypes: <> */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // biome-ignore lint/suspicious/noExplicitAny: <>
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
