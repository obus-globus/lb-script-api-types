import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ReverseNaturalOrdering extends Ordering<Comparable<Object>> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound<T extends unknown>(paramcomparators: (param0: Object, param1: Object) => number[]): Ordering<T>;
    static explicit<T extends unknown>(paramleastValue: T, ...paramremainingValuesInOrder: T[]): Ordering<T>;
    static explicit<T extends unknown>(paramvaluesInOrder: T[]): Ordering<T>;
    static from<T extends unknown>(paramordering: Ordering<T>): Ordering<T>;
    static from<T extends unknown>(paramcomparator: (param0: T, param1: T) => number): Ordering<T>;
    static natural<C extends Comparable<Object>>(): Ordering<C>;
    static usingToString(): Ordering<Object>;
    private constructor()
    compare(left: Comparable<Object>, right: Comparable<Object>): number;
    max<E extends Comparable<Object>>(a: E, b: E): E;
    max<E extends Comparable<Object>>(a: E, b: E, c: E, ...rest: E[]): E;
    max<E extends Comparable<Object>>(iterable: E[]): E;
    max<E extends Comparable<Object>>(iterator: Iterator<E>): E;
    min<E extends Comparable<Object>>(a: E, b: E): E;
    min<E extends Comparable<Object>>(a: E, b: E, c: E, ...rest: E[]): E;
    min<E extends Comparable<Object>>(iterable: E[]): E;
    min<E extends Comparable<Object>>(iterator: Iterator<E>): E;
    // private readResolve(): Object;
    reverse<S extends Comparable<Object>>(): Ordering<S>;
    toString(): string;
}