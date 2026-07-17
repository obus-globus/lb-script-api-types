import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export interface RuntimeResourceSupport<C extends unknown> extends Object{
    addCondition(condition: AccessCondition, module: Module, resourcePath: string): void;
    addGlob(condition: C, module: string, glob: string, origin: Object): void;
    addResource(module: Module, resourcePath: string, origin: Object): void;
    addResource(condition: AccessCondition, module: Module, resourcePath: string, origin: Object): void;
    addResourceBundles(condition: C, preserved: boolean, name: string): void;
    addResourceBundles(condition: C, basename: string, locales: Locale[]): void;
    addResourceEntry(module: Module, resourcePath: string, origin: Object): void;
    addResources(condition: C, pattern: string, origin: Object): void;
    ignoreResources(condition: C, pattern: string, origin: Object): void;
    injectResource(module: Module, resourcePath: string, resourceContent: number[], origin: Object): void;
}