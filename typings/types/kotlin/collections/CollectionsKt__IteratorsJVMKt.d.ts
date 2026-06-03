import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { CollectionsKt__IterablesKt } from '../../kotlin/collections/CollectionsKt__IterablesKt.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Random as Random_2 } from '../../kotlin/random/Random.d.ts'
export class CollectionsKt__IteratorsJVMKt extends CollectionsKt__IterablesKt {
    static arrayListOf(paramarg0: Object | null): (Object | null)[];
    static asCollection(paramarg0: Object | null, paramarg1: boolean): E[];
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number): number;
    static binarySearch(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean, paramarg3: number, paramarg4: number): number;
    static binarySearch(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => number): number;
    static binarySearchBy(paramarg0: (Object | null)[], paramarg1: Object | null, paramarg2: number, paramarg3: number, paramarg4: (param0: Object | null) => Object | null): number;
    static build(paramarg0: (Object | null)[]): (Object | null)[];
    static collectionSizeOrDefault(paramarg0: (Object | null)[], paramarg1: number): number;
    static collectionSizeOrNull(paramarg0: (Object | null)[]): number;
    static collectionToArrayCommonImpl(paramarg0: E[], paramarg1: Object | null): Object | null;
    static collectionToArrayCommonImpl(paramarg0: E[]): (Object | null)[];
    static copyToArrayOfAny(paramarg0: Object | null, paramarg1: boolean): (Object | null)[];
    static createListBuilder(): (Object | null)[];
    static createListBuilder(paramarg0: number): (Object | null)[];
    static emptyList(): (Object | null)[];
    static flatten(paramarg0: (Object | null)[]): (Object | null)[];
    static getIndices(paramarg0: E[]): { start: number; endInclusive: number; step: number };
    static getLastIndex(paramarg0: (Object | null)[]): number;
    static iterator(paramarg0: Enumeration<Object>): Iterator<Object>;
    static listOf(paramarg0: Object | null): (Object | null)[];
    static listOf(paramarg0: Object | null): (Object | null)[];
    static listOfNotNull(paramarg0: Object | null): (Object | null)[];
    static listOfNotNull(paramarg0: Object | null): (Object | null)[];
    static mutableListOf(paramarg0: Object | null): (Object | null)[];
    static optimizeReadOnlyList(paramarg0: (Object | null)[]): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[]): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static shuffled(paramarg0: (Object | null)[], paramarg1: Random_2): (Object | null)[];
    static terminateCollectionToArray(paramarg0: number, paramarg1: Object | null): Object | null;
    static throwCountOverflow(): void;
    static throwIndexOverflow(): void;
    static unzip(paramarg0: (Object | null)[]): Pair<Object, Object>;
}