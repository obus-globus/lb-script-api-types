import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSArrayObject$GetMembers extends Object {
    static fastArray(paramtarget: JSArrayObject, paraminternal: boolean, paramself: InteropLibrary): Object;
    static slowArray(paramtarget: JSArrayObject, paraminternal: boolean, paramself: InteropLibrary): Object;
    constructor()
}