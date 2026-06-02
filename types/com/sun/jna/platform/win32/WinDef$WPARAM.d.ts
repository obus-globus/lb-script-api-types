import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { WinDef$UINT_PTR } from '../../../../../com/sun/jna/platform/win32/WinDef$UINT_PTR.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinDef$WPARAM extends WinDef$UINT_PTR {
    static compare(paramarg0: Object | null, paramarg1: Object | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}