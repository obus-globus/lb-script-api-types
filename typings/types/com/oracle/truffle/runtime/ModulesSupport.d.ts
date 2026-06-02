import type { Accessor$JavaLangSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$JavaLangSupport.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ModulesSupport extends Object {
    static addExports(parambase: Module, paramp: string, paramtarget: Module): void;
    static addOpens(parambase: Module, paramp: string, paramtarget: Module): void;
    static exportJVMCI(paramtoClass: Class<Object>): string;
    static exportJVMCI(parammodule: Module): string;
    static exportTruffleRuntimeTo(paramclient: Class<Object>): void;
    static getJavaLangSupport(): Accessor$JavaLangSupport;
    private constructor()
}