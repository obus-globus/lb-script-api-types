import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UnsignedBytes$ArraysCompareUnsignedComparatorMaker extends Enum<UnsignedBytes$ArraysCompareUnsignedComparatorMaker> {
    static INSTANCE: UnsignedBytes$ArraysCompareUnsignedComparatorMaker;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UnsignedBytes$ArraysCompareUnsignedComparatorMaker;
    static values(): UnsignedBytes$ArraysCompareUnsignedComparatorMaker[];
    constructor(arg2: any)
    tryMakeArraysCompareUnsignedComparator(): (param0: number[], param1: number[]) => number;
    name(): "INSTANCE";
}