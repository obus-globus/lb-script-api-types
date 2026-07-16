import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
export class BaseTSD$DWORD_PTR extends IntegerType {
    static compare<T extends IntegerType>(paramarg0: T, paramarg1: T): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
}