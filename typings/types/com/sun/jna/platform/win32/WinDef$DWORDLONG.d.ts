import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class WinDef$DWORDLONG extends IntegerType implements Comparable<WinDef$DWORDLONG> {
    static SIZE: number;
    static compare(paramarg0: Object | null, paramarg1: Object | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    constructor()
    constructor(arg0: number)
    compareTo(arg0: WinDef$DWORDLONG): number;
}