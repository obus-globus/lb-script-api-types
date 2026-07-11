import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NullsLastOrdering<T extends unknown> extends Ordering<T> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (param0: Object) => boolean[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, ...paramremainingValuesInOrder: Object | null): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object) => boolean): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    constructor(ordering: Ordering<T>)
    // private ordering: Ordering<T>;
    compare(left: T, right: T): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    nullsFirst<S extends T>(): Ordering<S>;
    nullsLast<S extends T>(): Ordering<S>;
    reverse<S extends T>(): Ordering<S>;
    toString(): string;
}