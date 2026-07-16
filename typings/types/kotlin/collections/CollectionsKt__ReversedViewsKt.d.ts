import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { CollectionsKt__MutableCollectionsKt } from '../../kotlin/collections/CollectionsKt__MutableCollectionsKt.d.ts'
import type { IndexedValue } from '../../kotlin/collections/IndexedValue.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Random as Random_2 } from '../../kotlin/random/Random.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class CollectionsKt__ReversedViewsKt extends CollectionsKt__MutableCollectionsKt {
    static addAll<T extends unknown>(self: T[], elements: T[]): boolean;
    static addAll<T extends unknown>(self: T[], elements: Sequence<T>): boolean;
    static arrayListOf<T extends unknown>(...elements: T[]): T[];
    static asCollection<T extends unknown>(self: T[], isVarargs: boolean): T[];
    static asReversed<T extends unknown>(self: T[]): T[];
    static asReversedMutable<T extends unknown>(self: T[]): T[];
    static binarySearch<T extends Comparable<T>>(self: (T | null)[], element: T | null, fromIndex: number, toIndex: number): number;
    static binarySearch<T extends unknown>(self: T[], element: T, comparator: (param0: T, param1: T) => number, fromIndex: number, toIndex: number): number;
    static binarySearch<T extends unknown>(self: T[], fromIndex: number, toIndex: number, comparison: (param0: T) => number): number;
    static binarySearchBy<T extends unknown, K extends Comparable<K>>(self: T[], key: K | null, fromIndex: number, toIndex: number, selector: (param0: T) => K | null): number;
    static build<E extends unknown>(builder: E[]): E[];
    static collectionSizeOrDefault<T extends unknown>(self: T[], default_: number): number;
    static collectionSizeOrNull<T extends unknown>(self: T[]): number | null;
    static collectionToArrayCommonImpl<T extends unknown>(collection: (Object | null)[], array: T[]): T[];
    static collectionToArrayCommonImpl(collection: (Object | null)[]): (Object | null)[];
    static convertToListIfNotCollection<T extends unknown>(self: T[]): T[];
    static copyToArrayOfAny<T extends unknown>(self: T[], isVarargs: boolean): (Object | null)[];
    static createListBuilder<E extends unknown>(): E[];
    static createListBuilder<E extends unknown>(capacity: number): E[];
    static emptyList<T extends unknown>(): T[];
    static flatten<T extends unknown>(self: T[][]): T[];
    static forEach<T extends unknown>(self: Iterator<T>, operation: (param0: T) => void): void;
    static getIndices(paramarg0: Object[]): { start: number; endInclusive: number; step: number };
    static getLastIndex<T extends unknown>(paramarg0: T[]): number;
    static iterator<T extends unknown>(self: Enumeration<T>): Iterator<T>;
    static listOf<T extends unknown>(element: T): T[];
    static listOf<T extends unknown>(...elements: T[]): T[];
    static listOfNotNull<T extends unknown>(element: T | null): T[];
    static listOfNotNull<T extends unknown>(...elements: (T | null)[]): T[];
    static mutableListOf<T extends unknown>(...elements: T[]): T[];
    static optimizeReadOnlyList<T extends unknown>(self: T[]): T[];
    static removeAll<T extends unknown>(self: T[], predicate: (param0: T) => boolean): boolean;
    static removeAll<T extends unknown>(self: T[], elements: T[]): boolean;
    static removeAll<T extends unknown>(self: T[], elements: Sequence<T>): boolean;
    static removeFirst<T extends unknown>(self: T[]): T;
    static removeFirstOrNull<T extends unknown>(self: T[]): T | null;
    static removeLast<T extends unknown>(self: T[]): T;
    static removeLastOrNull<T extends unknown>(self: T[]): T | null;
    static retainAll<T extends unknown>(self: T[], predicate: (param0: T) => boolean): boolean;
    static retainAll<T extends unknown>(self: T[], elements: T[]): boolean;
    static retainAll<T extends unknown>(self: T[], elements: Sequence<T>): boolean;
    static shuffled<T extends unknown>(self: T[]): T[];
    static shuffled<T extends unknown>(self: T[], random: Random): T[];
    static shuffled<T extends unknown>(self: T[], random: Random_2): T[];
    static sort<T extends Comparable<T>>(self: T[]): void;
    static sortWith<T extends unknown>(self: T[], comparator: (param0: T, param1: T) => number): void;
    static terminateCollectionToArray<T extends unknown>(collectionSize: number, array: T[]): T[];
    static throwCountOverflow(): void;
    static throwIndexOverflow(): void;
    static unzip<T extends unknown, R extends unknown>(self: Pair<T, R>[]): Pair<T[], R[]>;
    static withIndex<T extends unknown>(self: Iterator<T>): Iterator<IndexedValue<T>>;
}