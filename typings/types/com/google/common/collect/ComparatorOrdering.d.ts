import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ComparatorOrdering<T extends unknown> extends Ordering<T> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (param0: Object, param1: Object) => number[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, ...paramremainingValuesInOrder: (Object | null)[]): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object | null, param1: Object | null) => number): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    constructor(comparator: (param0: T, param1: T) => number)
    // private comparator: (param0: T, param1: T) => number;
    compare(a: T, b: T): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}