import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinNT$HRESULT extends NativeLong {
    static SIZE: number;
    static compare(paramarg0: Object | null, paramarg1: Object | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}