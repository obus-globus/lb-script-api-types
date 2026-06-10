import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
export class LibCAPI$size_t extends IntegerType {
    static ZERO: LibCAPI$size_t;
    static compare(paramarg0: IntegerType | null, paramarg1: IntegerType | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}