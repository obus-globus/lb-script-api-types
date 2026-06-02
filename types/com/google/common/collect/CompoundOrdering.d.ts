import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CompoundOrdering<T extends Object | number | string | boolean> extends Ordering<T> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (Object | null)[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, paramremainingValuesInOrder: Object | null): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object | null) => kotlin.Boolean): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    constructor(primary: (param0: T) => kotlin.Boolean, secondary: (param0: T) => kotlin.Boolean)
    constructor(comparators: (param0: T) => kotlin.Boolean[])
    // private comparators: (param0: T) => kotlin.Boolean[];
    compare(left: T, right: T): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}