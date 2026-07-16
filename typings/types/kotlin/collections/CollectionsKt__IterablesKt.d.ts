import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { CollectionsKt__CollectionsKt } from '../../kotlin/collections/CollectionsKt__CollectionsKt.d.ts'
import type { Random as Random_2 } from '../../kotlin/random/Random.d.ts'
export class CollectionsKt__IterablesKt extends CollectionsKt__CollectionsKt {
    static arrayListOf<T extends unknown>(...elements: T[]): T[];
    static asCollection<T extends unknown>(self: T[], isVarargs: boolean): T[];
    static binarySearch<T extends Comparable<T>>(self: (T | null)[], element: T | null, fromIndex: number, toIndex: number): number;
    static binarySearch<T extends unknown>(self: T[], element: T, comparator: (param0: T, param1: T) => number, fromIndex: number, toIndex: number): number;
    static binarySearch<T extends unknown>(self: T[], fromIndex: number, toIndex: number, comparison: (param0: T) => number): number;
    static binarySearchBy<T extends unknown, K extends Comparable<K>>(self: T[], key: K | null, fromIndex: number, toIndex: number, selector: (param0: T) => K | null): number;
    static build<E extends unknown>(builder: E[]): E[];
    static collectionSizeOrDefault<T extends unknown>(self: T[], default_: number): number;
    static collectionSizeOrNull<T extends unknown>(self: T[]): number | null;
    static collectionToArrayCommonImpl<T extends unknown>(collection: (Object | null)[], array: T[]): T[];
    static collectionToArrayCommonImpl(collection: (Object | null)[]): (Object | null)[];
    static copyToArrayOfAny<T extends unknown>(self: T[], isVarargs: boolean): (Object | null)[];
    static createListBuilder<E extends unknown>(): E[];
    static createListBuilder<E extends unknown>(capacity: number): E[];
    static emptyList<T extends unknown>(): T[];
    static flatten<T extends unknown>(self: T[][]): T[];
    static getIndices(paramarg0: Object[]): { start: number; endInclusive: number; step: number };
    static getLastIndex<T extends unknown>(paramarg0: T[]): number;
    static listOf<T extends unknown>(element: T): T[];
    static listOf<T extends unknown>(...elements: T[]): T[];
    static listOfNotNull<T extends unknown>(element: T | null): T[];
    static listOfNotNull<T extends unknown>(...elements: (T | null)[]): T[];
    static mutableListOf<T extends unknown>(...elements: T[]): T[];
    static optimizeReadOnlyList<T extends unknown>(self: T[]): T[];
    static shuffled<T extends unknown>(self: T[]): T[];
    static shuffled<T extends unknown>(self: T[], random: Random): T[];
    static shuffled<T extends unknown>(self: T[], random: Random_2): T[];
    static terminateCollectionToArray<T extends unknown>(collectionSize: number, array: T[]): T[];
    static throwCountOverflow(): void;
    static throwIndexOverflow(): void;
    static unzip<T extends unknown, R extends unknown>(self: Pair<T, R>[]): Pair<T[], R[]>;
}