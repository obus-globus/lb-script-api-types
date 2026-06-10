import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { WinDef$UCHAR } from '../../../../../com/sun/jna/platform/win32/WinDef$UCHAR.d.ts'
export class WinDef$BYTE extends WinDef$UCHAR {
    static SIZE: number;
    static compare(paramarg0: IntegerType | null, paramarg1: IntegerType | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}