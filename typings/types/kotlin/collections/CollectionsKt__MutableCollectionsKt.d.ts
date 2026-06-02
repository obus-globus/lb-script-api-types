import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { CollectionsKt__MutableCollectionsJVMKt } from '../../kotlin/collections/CollectionsKt__MutableCollectionsJVMKt.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class CollectionsKt__MutableCollectionsKt extends CollectionsKt__MutableCollectionsJVMKt {
    static addAll(paramarg0: E[], paramarg1: Object | null): boolean;
    static addAll(paramarg0: E[], paramarg1: (Object | null)[]): boolean;
    static addAll(paramarg0: E[], paramarg1: Sequence<Object>): boolean;
    static arrayListOf(paramarg0: Object | null): (Object | null)[];
    static asCollection(paramarg0: Object | null, paramarg1: boolean): E[];
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number): number;
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean, paramarg3: number, paramarg4: number): number;
    static binarySearch(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: Function1<Object, number>): number;
    static binarySearchBy(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number, paramarg4: Function1<Object, Object>): number;
    static build(paramarg0: (Object | null)[]): (Object | null)[];
    static collectionSizeOrDefault(paramarg0: (Object | null)[], paramarg1: number): number;
    static collectionSizeOrNull(paramarg0: (Object | null)[]): number;
    static collectionToArrayCommonImpl(paramarg0: E[], paramarg1: Object | null): Object | null;
    static collectionToArrayCommonImpl(paramarg0: E[]): (Object | null)[];
    static convertToListIfNotCollection(paramarg0: (Object | null)[]): E[];
    static copyToArrayOfAny(paramarg0: Object | null, paramarg1: boolean): (Object | null)[];
    static createListBuilder(): (Object | null)[];
    static createListBuilder(paramarg0: number): (Object | null)[];
    static emptyList(): (Object | null)[];
    static flatten(paramarg0: (Object | null)[]): (Object | null)[];
    static forEach(paramarg0: Iterator<Object>, paramarg1: Function1<Object, void>): void;
    static getIndices(paramarg0: E[]): { start: number; endInclusive: number; step: number };
    static getLastIndex(paramarg0: (Object | null)[]): number;
    static iterator(paramarg0: Enumeration<Object>): Iterator<Object>;
    static listOf(paramarg0: Object | null): (Object | null)[];
    static listOf(paramarg0: Object | null): (Object | null)[];
    static listOfNotNull(paramarg0: Object | null): (Object | null)[];
    static listOfNotNull(paramarg0: Object | null): (Object | null)[];
    static mutableListOf(paramarg0: Object | null): (Object | null)[];
    static optimizeReadOnlyList(paramarg0: (Object | null)[]): (Object | null)[];
    static removeAll(paramarg0: (Object | null)[], paramarg1: Function1<Object, boolean>): boolean;
    static removeAll(paramarg0: E[], paramarg1: Object | null): boolean;
    static removeAll(paramarg0: E[], paramarg1: (Object | null)[]): boolean;
    static removeAll(paramarg0: E[], paramarg1: Sequence<Object>): boolean;
    static removeAll(paramarg0: (Object | null)[], paramarg1: Function1<Object, boolean>): boolean;
    static removeFirst(paramarg0: (Object | null)[]): Object | null;
    static removeFirstOrNull(paramarg0: (Object | null)[]): Object | null;
    static removeLast(paramarg0: (Object | null)[]): Object | null;
    static removeLastOrNull(paramarg0: (Object | null)[]): Object | null;
    static retainAll(paramarg0: (Object | null)[], paramarg1: Function1<Object, boolean>): boolean;
    static retainAll(paramarg0: E[], paramarg1: Object | null): boolean;
    static retainAll(paramarg0: E[], paramarg1: (Object | null)[]): boolean;
    static retainAll(paramarg0: E[], paramarg1: Sequence<Object>): boolean;
    static retainAll(paramarg0: (Object | null)[], paramarg1: Function1<Object, boolean>): boolean;
    static shuffled(paramarg0: (Object | null)[]): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static sort(paramarg0: (Object | null)[]): void;
    static sortWith(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => kotlin.Boolean): void;
    static terminateCollectionToArray(paramarg0: number, paramarg1: Object | null): Object | null;
    static throwCountOverflow(): void;
    static throwIndexOverflow(): void;
    static unzip(paramarg0: (Object | null)[]): Pair<Object, Object>;
    static withIndex(paramarg0: Iterator<Object>): Iterator<Object>;
}