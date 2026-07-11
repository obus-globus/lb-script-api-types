import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AllEqualOrdering extends Ordering<Object> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (param0: Object) => boolean[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, ...paramremainingValuesInOrder: Object | null): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object) => boolean): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    constructor()
    compare(left: Object, right: Object): number;
    immutableSortedCopy<E extends unknown>(iterable: E[]): E[];
    // private readResolve(): Object;
    reverse<S extends unknown>(): Ordering<S>;
    sortedCopy<E extends unknown>(iterable: E[]): E[];
    toString(): string;
}