import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ReverseOrdering<T extends Object | number | string | boolean> extends Ordering<T> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (Object | null)[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, paramremainingValuesInOrder: Object | null): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object | null) => kotlin.Boolean): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    constructor(forwardOrder: Ordering<T>)
    // private forwardOrder: Ordering<T>;
    compare(a: T, b: T): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    max<E extends T>(a: E, b: E): E;
    max<E extends T>(a: E, b: E, c: E, rest: E[]): E;
    max<E extends T>(iterable: E[]): E;
    max<E extends T>(iterator: Iterator<E>): E;
    min<E extends T>(a: E, b: E): E;
    min<E extends T>(a: E, b: E, c: E, rest: E[]): E;
    min<E extends T>(iterable: E[]): E;
    min<E extends T>(iterator: Iterator<E>): E;
    reverse(): Ordering<S>;
    toString(): string;
}