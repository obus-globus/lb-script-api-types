import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class XAttr$ssize_t extends IntegerType {
    static ZERO: XAttr$ssize_t;
    static compare(paramarg0: Object | null, paramarg1: Object | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}