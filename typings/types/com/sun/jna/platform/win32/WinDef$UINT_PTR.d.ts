import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinDef$UINT_PTR extends IntegerType {
    static compare(paramarg0: Object | null, paramarg1: Object | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
    toPointer(): Pointer;
}