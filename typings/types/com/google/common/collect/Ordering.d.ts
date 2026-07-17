import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function as Function_2 } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class Ordering<T extends unknown> extends Object implements Comparator<T> {
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
    binarySearch(sortedList: T[], key: T): number;
    compare(left: T, right: T): number;
    compound<U extends T>(secondaryComparator: (param0: U, param1: U) => number): Ordering<U>;
    greatestOf<E extends T>(iterable: E[], k: number): E[];
    greatestOf<E extends T>(iterator: Iterator<E>, k: number): E[];
    immutableSortedCopy<E extends T>(elements: E[]): E[];
    isOrdered(iterable: T[]): boolean;
    isStrictlyOrdered(iterable: T[]): boolean;
    leastOf<E extends T>(iterable: E[], k: number): E[];
    leastOf<E extends T>(iterator: Iterator<E>, k: number): E[];
    lexicographical<S extends T>(): Ordering<S[]>;
    max<E extends T>(a: E, b: E): E;
    max<E extends T>(a: E, b: E, c: E, ...rest: E[]): E;
    max<E extends T>(iterable: E[]): E;
    max<E extends T>(iterator: Iterator<E>): E;
    min<E extends T>(a: E, b: E): E;
    min<E extends T>(a: E, b: E, c: E, ...rest: E[]): E;
    min<E extends T>(iterable: E[]): E;
    min<E extends T>(iterator: Iterator<E>): E;
    nullsFirst<S extends T>(): Ordering<S>;
    nullsLast<S extends T>(): Ordering<S>;
    onKeys<T2 extends T>(): Ordering<Map$Entry<T2, Object>>;
    onResultOf<F extends unknown>(function_: (param0: F) => T): Ordering<F>;
    reverse<S extends T>(): Ordering<S>;
    reversed(): (param0: T, param1: T) => number;
    sortedCopy<E extends T>(elements: E[]): E[];
    thenComparing(arg0: (param0: T, param1: T) => number): (param0: T, param1: T) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: T) => U): (param0: T, param1: T) => number;
    thenComparing<U extends unknown>(arg0: (param0: T) => U, arg1: (param0: U, param1: U) => number): (param0: T, param1: T) => number;
    thenComparingDouble(arg0: (param0: T) => number): (param0: T, param1: T) => number;
    thenComparingInt(arg0: (param0: T) => number): (param0: T, param1: T) => number;
    thenComparingLong(arg0: (param0: T) => number): (param0: T, param1: T) => number;
}