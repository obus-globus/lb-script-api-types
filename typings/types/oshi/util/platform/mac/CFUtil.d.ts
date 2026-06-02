import type { Pointer } from '../../../../com/sun/jna/Pointer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CFUtil extends Object {
    static cfPointerToString(paramarg0: Pointer): string;
    static cfPointerToString(paramarg0: Pointer, paramarg1: boolean): string;
    private constructor()
}