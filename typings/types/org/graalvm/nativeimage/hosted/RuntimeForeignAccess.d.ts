import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeForeignAccess extends Object {
    static registerForDirectUpcall(paramtarget: MethodHandle, paramdesc: Object, ...paramoptions: Object[]): void;
    static registerForDowncall(paramdesc: Object, ...paramoptions: Object[]): void;
    static registerForUpcall(paramdesc: Object, ...paramoptions: Object[]): void;
    private constructor()
}