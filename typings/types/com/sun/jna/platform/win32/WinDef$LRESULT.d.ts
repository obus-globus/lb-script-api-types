import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { BaseTSD$LONG_PTR } from '../../../../../com/sun/jna/platform/win32/BaseTSD$LONG_PTR.d.ts'
export class WinDef$LRESULT extends BaseTSD$LONG_PTR {
    static compare(paramarg0: IntegerType | null, paramarg1: IntegerType | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}