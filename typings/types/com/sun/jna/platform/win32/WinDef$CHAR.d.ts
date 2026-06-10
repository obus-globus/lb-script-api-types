import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class WinDef$CHAR extends IntegerType implements Comparable<WinDef$CHAR> {
    static SIZE: number;
    static compare(paramarg0: IntegerType | null, paramarg1: IntegerType | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
    constructor(arg0: number)
    compareTo(arg0: WinDef$CHAR): number;
}