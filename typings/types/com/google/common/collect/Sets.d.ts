import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Sets extends Object {
    static cartesianProduct(paramsets: (Object | null)[][]): (Object | null)[][];
    static cartesianProduct(paramsets: Object | null): (Object | null)[][];
    static combinations(paramset: (Object | null)[], paramsize: number): (Object | null)[][];
    static complementOf(paramcollection: (Object | null)[]): (Object | null)[];
    static complementOf(paramcollection: (Object | null)[], paramtype: Class<Object>): (Object | null)[];
    static difference(paramset1: (Object | null)[], paramset2: Object[]): (Object | null)[];
    static filter(paramunfiltered: (Object | null)[], parampredicate: (param0: Object) => boolean): (Object | null)[];
    static filter(paramunfiltered: (Object | null)[], parampredicate: (param0: Object) => boolean): (Object | null)[];
    static filter(paramunfiltered: (Object | null)[], parampredicate: (param0: Object) => boolean): (Object | null)[];
    static immutableEnumSet(paramanElement: Object | null, paramotherElements: Object | null): (Object | null)[];
    static immutableEnumSet(paramelements: (Object | null)[]): (Object | null)[];
    static intersection(paramset1: (Object | null)[], paramset2: Object[]): (Object | null)[];
    static newConcurrentHashSet(): (Object | null)[];
    static newConcurrentHashSet(paramelements: (Object | null)[]): (Object | null)[];
    static newCopyOnWriteArraySet(): (Object | null)[];
    static newCopyOnWriteArraySet(paramelements: (Object | null)[]): (Object | null)[];
    static newEnumSet(paramiterable: (Object | null)[], paramelementType: Class<Object>): (Object | null)[];
    static newHashSet(): (Object | null)[];
    static newHashSet(paramelements: Object | null): (Object | null)[];
    static newHashSet(paramelements: (Object | null)[]): (Object | null)[];
    static newHashSet(paramelements: Iterator<Object>): (Object | null)[];
    static newHashSetWithExpectedSize(paramexpectedSize: number): (Object | null)[];
    static newIdentityHashSet(): (Object | null)[];
    static newLinkedHashSet(): (Object | null)[];
    static newLinkedHashSet(paramelements: (Object | null)[]): (Object | null)[];
    static newLinkedHashSetWithExpectedSize(paramexpectedSize: number): (Object | null)[];
    static newSetFromMap(parammap: Map<Object | null, boolean>): (Object | null)[];
    static newTreeSet(): (Object | null)[];
    static newTreeSet(paramelements: (Object | null)[]): (Object | null)[];
    static newTreeSet(paramcomparator: (param0: Object) => boolean): (Object | null)[];
    static powerSet(paramset: (Object | null)[]): (Object | null)[][];
    static subSet(paramset: (Object | null)[], paramrange: Range<any>): (Object | null)[];
    static symmetricDifference(paramset1: (Object | null)[], paramset2: (Object | null)[]): (Object | null)[];
    static synchronizedNavigableSet(paramnavigableSet: (Object | null)[]): (Object | null)[];
    static toImmutableEnumSet(): Collector<Object, Object, (Object | null)[]>;
    static union(paramset1: (Object | null)[], paramset2: (Object | null)[]): (Object | null)[];
    static unmodifiableNavigableSet(paramset: (Object | null)[]): (Object | null)[];
    private constructor()
}