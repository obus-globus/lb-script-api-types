import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { ArraysKt__ArraysJVMKt } from '../../kotlin/collections/ArraysKt__ArraysJVMKt.d.ts'
export class ArraysKt__ArraysKt extends ArraysKt__ArraysJVMKt {
    static arrayOfNulls(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static contentDeepEquals(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): boolean;
    static contentDeepHashCode(paramarg0: (Object | null)[]): number;
    static contentDeepToString(paramarg0: (Object | null)[]): string;
    static copyOfRangeToIndexCheck(paramarg0: number, paramarg1: number): void;
    static flatten(paramarg0: (Object | null)[][]): (Object | null)[];
    static orEmpty(paramarg0: (Object | null)[]): (Object | null)[];
    static toTypedArray(paramarg0: (Object | null)[]): (Object | null)[];
    static unzip(paramarg0: Pair<Object, Object>[]): Pair<(Object | null)[], (Object | null)[]>;
}