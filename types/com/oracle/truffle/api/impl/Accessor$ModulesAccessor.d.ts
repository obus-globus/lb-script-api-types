import type { Accessor$JavaLangSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$JavaLangSupport.d.ts'
import type { Module } from '../../../../../java/lang/Module.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$ModulesAccessor extends Object {
    constructor()
    addEnableNativeAccess(module: Module): void;
    addEnableNativeAccessToAllUnnamed(): void;
    addExports(base: Module, p: string, target: Module): void;
    addExportsToAllUnnamed(base: Module, p: string): void;
    addOpens(base: Module, p: string, target: Module): void;
    addOpensToAllUnnamed(base: Module, p: string): void;
    getJavaLangSupport(): Accessor$JavaLangSupport;
    getTargetModule(): Module;
}