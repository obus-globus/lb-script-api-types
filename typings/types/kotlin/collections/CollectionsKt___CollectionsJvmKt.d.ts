import type { Class } from '../../java/lang/Class.d.ts'
import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { CollectionsKt__ReversedViewsKt } from '../../kotlin/collections/CollectionsKt__ReversedViewsKt.d.ts'
import type { IndexedValue } from '../../kotlin/collections/IndexedValue.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Random as Random_2 } from '../../kotlin/random/Random.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class CollectionsKt___CollectionsJvmKt extends CollectionsKt__ReversedViewsKt {
    static addAll(paramarg0: Object[], paramarg1: (Object | null)[]): boolean;
    static addAll(paramarg0: Object[], paramarg1: Sequence<Object>): boolean;
    static arrayListOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static asCollection(paramarg0: (Object | null)[], paramarg1: boolean): (Object | null)[];
    static asReversed(paramarg0: (Object | null)[]): (Object | null)[];
    static asReversedMutable(paramarg0: (Object | null)[]): (Object | null)[];
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number): number;
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => number, paramarg3: number, paramarg4: number): number;
    static binarySearch(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => number): number;
    static binarySearchBy(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number, paramarg4: (param0: Object) => Object | null): number;
    static build(paramarg0: (Object | null)[]): (Object | null)[];
    static collectionSizeOrDefault(paramarg0: (Object | null)[], paramarg1: number): number;
    static collectionSizeOrNull(paramarg0: (Object | null)[]): number;
    static collectionToArrayCommonImpl(paramarg0: Object[], paramarg1: (Object | null)[]): (Object | null)[];
    static collectionToArrayCommonImpl(paramarg0: Object[]): Object[];
    static convertToListIfNotCollection(paramarg0: (Object | null)[]): (Object | null)[];
    static copyToArrayOfAny(paramarg0: (Object | null)[], paramarg1: boolean): Object[];
    static createListBuilder(): (Object | null)[];
    static createListBuilder(paramarg0: number): (Object | null)[];
    static emptyList(): (Object | null)[];
    static filterIsInstance(paramarg0: Object[], paramarg1: Class<Object>): (Object | null)[];
    static filterIsInstanceTo(paramarg0: Object[], paramarg1: Object | null, paramarg2: Class<Object>): Object | null;
    static flatten(paramarg0: (Object | null)[][]): (Object | null)[];
    static forEach(paramarg0: Iterator<Object>, paramarg1: (param0: Object) => void): void;
    static getIndices(paramarg0: Object[]): { start: number; endInclusive: number; step: number };
    static getLastIndex(paramarg0: (Object | null)[]): number;
    static iterator(paramarg0: Enumeration<Object>): Iterator<Object>;
    static listOf(paramarg0: Object | null): (Object | null)[];
    static listOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static listOfNotNull(paramarg0: Object | null): (Object | null)[];
    static listOfNotNull(...paramarg0: (Object | null)[]): (Object | null)[];
    static max(paramarg0: (Object | null)[]): Comparable<Object>;
    static max(paramarg0: (Object | null)[]): number;
    static maxBy(paramarg0: (Object | null)[], paramarg1: (param0: Object) => Object | null): Object | null;
    static maxWith(paramarg0: (Object | null)[], paramarg1: (param0: Object | null, param1: Object | null) => number): Object;
    static min(paramarg0: (Object | null)[]): Comparable<Object>;
    static min(paramarg0: (Object | null)[]): number;
    static minBy(paramarg0: (Object | null)[], paramarg1: (param0: Object) => Object | null): Object | null;
    static minWith(paramarg0: (Object | null)[], paramarg1: (param0: Object | null, param1: Object | null) => number): Object;
    static mutableListOf(...paramarg0: (Object | null)[]): (Object | null)[];
    static optimizeReadOnlyList(paramarg0: (Object | null)[]): (Object | null)[];
    static removeAll(paramarg0: (Object | null)[], paramarg1: (param0: Object) => boolean): boolean;
    static removeAll(paramarg0: Object[], paramarg1: (Object | null)[]): boolean;
    static removeAll(paramarg0: Object[], paramarg1: Sequence<Object>): boolean;
    static removeFirst(paramarg0: (Object | null)[]): Object | null;
    static removeFirstOrNull(paramarg0: (Object | null)[]): Object | null;
    static removeLast(paramarg0: (Object | null)[]): Object | null;
    static removeLastOrNull(paramarg0: (Object | null)[]): Object | null;
    static retainAll(paramarg0: (Object | null)[], paramarg1: (param0: Object) => boolean): boolean;
    static retainAll(paramarg0: Object[], paramarg1: (Object | null)[]): boolean;
    static retainAll(paramarg0: Object[], paramarg1: Sequence<Object>): boolean;
    static reverse(paramarg0: (Object | null)[]): void;
    static shuffled(paramarg0: (Object | null)[]): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[], paramarg1: Random_2): (Object | null)[];
    static sort(paramarg0: (Object | null)[]): void;
    static sortWith(paramarg0: (Object | null)[], paramarg1: (param0: Object, param1: Object) => number): void;
    static terminateCollectionToArray(paramarg0: number, paramarg1: (Object | null)[]): (Object | null)[];
    static throwCountOverflow(): void;
    static throwIndexOverflow(): void;
    static toSortedSet(paramarg0: (Object | null)[]): (Object | null)[];
    static toSortedSet(paramarg0: (Object | null)[], paramarg1: (param0: Object, param1: Object) => number): (Object | null)[];
    static unzip(paramarg0: Pair<Object, Object>[]): Pair<(Object | null)[], (Object | null)[]>;
    static withIndex(paramarg0: Iterator<Object>): Iterator<IndexedValue<Object>>;
}