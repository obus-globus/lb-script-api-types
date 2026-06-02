import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Unsafe } from '../../../../../../../../sun/misc/Unsafe.d.ts'
export class UnsafeAccess extends Object {
    static SUPPORTS_GET_AND_ADD_LONG: boolean;
    static SUPPORTS_GET_AND_SET_REF: boolean;
    static UNSAFE: Unsafe;
    static fieldOffset(paramarg0: Class<Object>, paramarg1: string): number;
    constructor()
}