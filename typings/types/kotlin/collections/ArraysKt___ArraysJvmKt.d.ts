import type { Class } from '../../java/lang/Class.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { ArraysKt__ArraysKt } from '../../kotlin/collections/ArraysKt__ArraysKt.d.ts'
export class ArraysKt___ArraysJvmKt extends ArraysKt__ArraysKt {
    static arrayOfNulls(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static asList(paramarg0: (Object | null)[]): (Object | null)[];
    static asList(paramarg0: boolean[]): boolean[];
    static asList(paramarg0: number[]): number[];
    static asList(paramarg0: string[]): string[];
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number): number;
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => number, paramarg3: number, paramarg4: number): number;
    static binarySearch(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static binarySearch(paramarg0: string[], paramarg1: string, paramarg2: number, paramarg3: number): number;
    static contentDeepEquals(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): boolean;
    static contentDeepHashCode(paramarg0: (Object | null)[]): number;
    static contentDeepToString(paramarg0: (Object | null)[]): string;
    static copyInto(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: number, paramarg3: number, paramarg4: number): (Object | null)[];
    static copyInto(paramarg0: boolean[], paramarg1: boolean[], paramarg2: number, paramarg3: number, paramarg4: number): boolean[];
    static copyInto(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: number): number[];
    static copyInto(paramarg0: string[], paramarg1: string[], paramarg2: number, paramarg3: number, paramarg4: number): string[];
    static copyOfRange(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static copyOfRange(paramarg0: boolean[], paramarg1: number, paramarg2: number): boolean[];
    static copyOfRange(paramarg0: number[], paramarg1: number, paramarg2: number): number[];
    static copyOfRange(paramarg0: string[], paramarg1: number, paramarg2: number): string[];
    static copyOfRangeToIndexCheck(paramarg0: number, paramarg1: number): void;
    static fill(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number): void;
    static fill(paramarg0: boolean[], paramarg1: boolean, paramarg2: number, paramarg3: number): void;
    static fill(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static fill(paramarg0: string[], paramarg1: string, paramarg2: number, paramarg3: number): void;
    static filterIsInstance(paramarg0: Object[], paramarg1: Class<Object>): (Object | null)[];
    static filterIsInstanceTo(paramarg0: Object[], paramarg1: Object | null, paramarg2: Class<Object>): Object | null;
    static flatten(paramarg0: (Object | null)[][]): (Object | null)[];
    static max(paramarg0: number[]): number;
    static max(paramarg0: string[]): string;
    static max(paramarg0: Comparable<Object>[]): Comparable<Object>;
    static maxBy(paramarg0: boolean[], paramarg1: (param0: Object) => Object | null): boolean;
    static maxBy(paramarg0: number[], paramarg1: (param0: Object) => Object | null): number;
    static maxBy(paramarg0: string[], paramarg1: (param0: Object) => Object | null): string;
    static maxBy(paramarg0: (Object | null)[], paramarg1: (param0: Object) => Object | null): Object | null;
    static maxWith(paramarg0: boolean[], paramarg1: (param0: Object | null, param1: Object | null) => number): boolean;
    static maxWith(paramarg0: number[], paramarg1: (param0: Object | null, param1: Object | null) => number): number;
    static maxWith(paramarg0: string[], paramarg1: (param0: Object | null, param1: Object | null) => number): string;
    static maxWith(paramarg0: Object[], paramarg1: (param0: Object | null, param1: Object | null) => number): Object;
    static min(paramarg0: number[]): number;
    static min(paramarg0: string[]): string;
    static min(paramarg0: Comparable<Object>[]): Comparable<Object>;
    static minBy(paramarg0: boolean[], paramarg1: (param0: Object) => Object | null): boolean;
    static minBy(paramarg0: number[], paramarg1: (param0: Object) => Object | null): number;
    static minBy(paramarg0: string[], paramarg1: (param0: Object) => Object | null): string;
    static minBy(paramarg0: (Object | null)[], paramarg1: (param0: Object) => Object | null): Object | null;
    static minWith(paramarg0: boolean[], paramarg1: (param0: Object | null, param1: Object | null) => number): boolean;
    static minWith(paramarg0: number[], paramarg1: (param0: Object | null, param1: Object | null) => number): number;
    static minWith(paramarg0: string[], paramarg1: (param0: Object | null, param1: Object | null) => number): string;
    static minWith(paramarg0: Object[], paramarg1: (param0: Object | null, param1: Object | null) => number): Object;
    static orEmpty(paramarg0: (Object | null)[]): (Object | null)[];
    static plus(paramarg0: (Object | null)[], paramarg1: Object | null): (Object | null)[];
    static plus(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): (Object | null)[];
    static plus(paramarg0: boolean[], paramarg1: boolean): boolean[];
    static plus(paramarg0: boolean[], paramarg1: boolean[]): boolean[];
    static plus(paramarg0: number[], paramarg1: number): number[];
    static plus(paramarg0: number[], paramarg1: number[]): number[];
    static plus(paramarg0: string[], paramarg1: string): string[];
    static plus(paramarg0: string[], paramarg1: string[]): string[];
    static sort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static sort(paramarg0: (Object | null)[]): void;
    static sort(paramarg0: number[]): void;
    static sort(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static sort(paramarg0: string[]): void;
    static sort(paramarg0: string[], paramarg1: number, paramarg2: number): void;
    static sortWith(paramarg0: (Object | null)[], paramarg1: (param0: Object, param1: Object) => number): void;
    static sortWith(paramarg0: (Object | null)[], paramarg1: (param0: Object, param1: Object) => number, paramarg2: number, paramarg3: number): void;
    static toSortedSet(paramarg0: (Object | null)[]): (Object | null)[];
    static toSortedSet(paramarg0: (Object | null)[], paramarg1: (param0: Object, param1: Object) => number): (Object | null)[];
    static toSortedSet(paramarg0: boolean[]): boolean[];
    static toSortedSet(paramarg0: number[]): number[];
    static toSortedSet(paramarg0: string[]): string[];
    static toTypedArray(paramarg0: (Object | null)[]): (Object | null)[];
    static toTypedArray(paramarg0: boolean[]): boolean[];
    static toTypedArray(paramarg0: number[]): number[];
    static toTypedArray(paramarg0: string[]): string[];
    static unzip(paramarg0: Pair<Object, Object>[]): Pair<(Object | null)[], (Object | null)[]>;
}