import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Ordering$ArbitraryOrdering extends Ordering<Object> {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (Object | null)[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, paramremainingValuesInOrder: Object | null): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object | null) => kotlin.Boolean): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    constructor()
    // private counter: AtomicInteger;
    // private uids: Map<Object, number>;
    compare(left: Object, right: Object): number;
    // private getUid(obj: Object): number;
    identityHashCode(object: Object): number;
    toString(): string;
}