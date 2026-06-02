import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ConfigurationCondition } from '../../../../org/graalvm/nativeimage/impl/ConfigurationCondition.d.ts'
export interface RuntimeResourceSupport<C extends Object | number | string | boolean> extends Object{
    addCondition(configurationCondition: ConfigurationCondition, module: Module, resourcePath: string): void;
    addGlob(condition: C, module: string, glob: string, origin: Object): void;
    addResource(module: Module, resourcePath: string, origin: Object): void;
    addResource(condition: ConfigurationCondition, module: Module, resourcePath: string, origin: Object): void;
    addResourceBundles(condition: C, name: string): void;
    addResourceBundles(condition: C, basename: string, locales: E[]): void;
    addResourceEntry(module: Module, resourcePath: string, origin: Object): void;
    addResources(condition: C, pattern: string, origin: Object): void;
    ignoreResources(condition: C, pattern: string): void;
    injectResource(module: Module, resourcePath: string, resourceContent: number[], origin: Object): void;
}