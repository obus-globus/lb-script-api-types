import type { Module } from '../../../../java/lang/Module.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AccessCondition } from '../../../../org/graalvm/nativeimage/dynamicaccess/AccessCondition.d.ts'
export interface ResourceAccess extends Object{
    register(condition: AccessCondition, module: Module, glob: string): void;
    register(condition: AccessCondition, glob: string): void;
    registerResourceBundle(condition: AccessCondition, ...bundles: ResourceBundle[]): void;
}