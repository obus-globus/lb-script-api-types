import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function as Function_2 } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class Ordering<T extends Object | number | string | boolean> extends Object implements Comparator<T> {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static comparing(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static comparing(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingDouble(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Boolean;
    static comparingInt(paramarg0: (param0: Object | null) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static comparingLong(paramarg0: (param0: Object | null) => kotlin.Long): (param0: Object | null) => kotlin.Boolean;
    static compound(paramcomparators: (Object | null)[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, paramremainingValuesInOrder: Object | null): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object | null) => kotlin.Boolean): Ordering<Object>;
    static natural(): Ordering<Object>;
    static naturalOrder(): (param0: Object | null) => kotlin.Boolean;
    static nullsFirst(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static nullsLast(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static reverseOrder(): (param0: Object | null) => kotlin.Boolean;
    static usingToString(): Ordering<Object>;
    constructor()
    binarySearch(sortedList: T[], key: T): number;
    compare(left: T, right: T): number;
    compound(secondaryComparator: (param0: U) => kotlin.Boolean): Ordering<U>;
    greatestOf(iterable: E[], k: number): E[];
    greatestOf(iterator: Iterator<E>, k: number): E[];
    immutableSortedCopy(elements: E[]): E[];
    isOrdered(iterable: T[]): boolean;
    isStrictlyOrdered(iterable: T[]): boolean;
    leastOf(iterable: E[], k: number): E[];
    leastOf(iterator: Iterator<E>, k: number): E[];
    lexicographical(): Ordering<S[]>;
    max<E extends T>(a: E, b: E): E;
    max<E extends T>(a: E, b: E, c: E, rest: E[]): E;
    max<E extends T>(iterable: E[]): E;
    max<E extends T>(iterator: Iterator<E>): E;
    min<E extends T>(a: E, b: E): E;
    min<E extends T>(a: E, b: E, c: E, rest: E[]): E;
    min<E extends T>(iterable: E[]): E;
    min<E extends T>(iterator: Iterator<E>): E;
    nullsFirst(): Ordering<S>;
    nullsLast(): Ordering<S>;
    onKeys(): Ordering<Map$Entry<T2, Object>>;
    onResultOf(function_: (param0: F) => T): Ordering<F>;
    reverse(): Ordering<S>;
    reversed(): (param0: T) => kotlin.Boolean;
    sortedCopy(elements: E[]): E[];
    thenComparing(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U, arg1: (param0: U) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparingDouble(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Boolean;
    thenComparingInt(arg0: (param0: T) => kotlin.Int): (param0: T) => kotlin.Boolean;
    thenComparingLong(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
}