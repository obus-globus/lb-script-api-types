import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Ordering$ArbitraryOrdering extends Ordering<Object> {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound<T extends unknown>(paramcomparators: (param0: Object, param1: Object) => number[]): Ordering<T>;
    static explicit<T extends unknown>(paramleastValue: T, ...paramremainingValuesInOrder: T[]): Ordering<T>;
    static explicit<T extends unknown>(paramvaluesInOrder: T[]): Ordering<T>;
    static from<T extends unknown>(paramordering: Ordering<T>): Ordering<T>;
    static from<T extends unknown>(paramcomparator: (param0: T, param1: T) => number): Ordering<T>;
    static natural<C extends Comparable<Object>>(): Ordering<C>;
    static usingToString(): Ordering<Object>;
    constructor()
    // private counter: AtomicInteger;
    // private uids: Map<Object, number>;
    compare(left: Object, right: Object): number;
    // private getUid(obj: Object): number;
    identityHashCode(object: Object): number;
    toString(): string;
}