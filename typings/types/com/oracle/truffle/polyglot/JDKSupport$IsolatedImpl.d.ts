import type { Accessor$JavaLangSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$JavaLangSupport.d.ts'
import type { Accessor$ModulesAccessor } from '../../../../com/oracle/truffle/api/impl/Accessor$ModulesAccessor.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JDKSupport$IsolatedImpl extends Accessor$ModulesAccessor {
    constructor(baseClass: Class<Object>)
    // private addEnableNativeAccess: MethodHandle;
    // private addEnableNativeAccessToAllUnnamed: MethodHandle;
    // private addExports: MethodHandle;
    // private addExportsToAllUnnamed: MethodHandle;
    // private addOpens: MethodHandle;
    // private addOpensToAllUnnamed: MethodHandle;
    // private createTerminatingThreadLocal: MethodHandle;
    // private currentCarrierThread: MethodHandle;
    readonly targetModule: Module;
    addEnableNativeAccess(module: Module): void;
    addEnableNativeAccessToAllUnnamed(): void;
    addExports(base: Module, p: string, target: Module): void;
    addExportsToAllUnnamed(base: Module, p: string): void;
    addOpens(base: Module, p: string, target: Module): void;
    addOpensToAllUnnamed(base: Module, p: string): void;
    getJavaLangSupport(): Accessor$JavaLangSupport;
    getTargetModule(): Module;
}