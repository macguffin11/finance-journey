import type { CompilerOptions } from '@vue/compiler-core';
import { compilerOptions as defaultCompilerOptions } from 'vue3-pixi'

export const compilerOptions: CompilerOptions = {
  ...defaultCompilerOptions,
  isCustomElement: (tag) => {
    return defaultCompilerOptions.isCustomElement(tag)
  }
}

export const transformAssetUrls = {
  sprite: ['texture'],
}