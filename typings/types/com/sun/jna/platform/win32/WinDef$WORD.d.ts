import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class WinDef$WORD extends IntegerType implements Comparable<WinDef$WORD> {
    static SIZE: number;
    static compare<T extends IntegerType>(paramarg0: T, paramarg1: T): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
    compareTo(arg0: WinDef$WORD): number;
}