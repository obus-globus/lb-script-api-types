import type { IntegerType } from '../../../../../com/sun/jna/IntegerType.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class WinDef$BOOL extends IntegerType implements Comparable<WinDef$BOOL> {
    static SIZE: number;
    static compare(paramarg0: IntegerType | null, paramarg1: IntegerType | null): number;
    static compare(paramarg0: number, paramarg1: number): number;
    static compare(paramarg0: IntegerType, paramarg1: number): number;
    static compare(paramarg0: boolean, paramarg1: boolean): number;
    static compare(paramarg0: WinDef$BOOL, paramarg1: boolean): number;
    static compare(paramarg0: WinDef$BOOL, paramarg1: WinDef$BOOL): number;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: number)
    booleanValue(): boolean;
    compareTo(arg0: WinDef$BOOL): number;
    toString(): string;
}