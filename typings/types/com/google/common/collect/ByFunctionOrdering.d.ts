import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Ordering } from '../../../../com/google/common/collect/Ordering.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByFunctionOrdering<F extends unknown, T extends unknown> extends Ordering<F> implements Serializable {
    static allEqual(): Ordering<Object>;
    static arbitrary(): Ordering<Object>;
    static compound(paramcomparators: (param0: Object, param1: Object) => number[]): Ordering<Object>;
    static explicit(paramleastValue: Object | null, ...paramremainingValuesInOrder: (Object | null)[]): Ordering<Object>;
    static explicit(paramvaluesInOrder: (Object | null)[]): Ordering<Object>;
    static from(paramordering: Ordering<Object>): Ordering<Object>;
    static from(paramcomparator: (param0: Object | null, param1: Object | null) => number): Ordering<Object>;
    static natural(): Ordering<Object>;
    static usingToString(): Ordering<Object>;
    constructor(function_: (param0: F) => T, ordering: Ordering<T>)
    // private function: (param0: F) => T;
    // private ordering: Ordering<T>;
    compare(left: F, right: F): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}