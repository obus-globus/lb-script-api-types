import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Range<T extends unknown> extends Object implements Serializable {
    static between(paramarg0: Object | null, paramarg1: Object | null): Range<Object>;
    static between(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object) => boolean): Range<Object>;
    static is(paramarg0: Object | null): Range<Object>;
    static is(paramarg0: Object | null, paramarg1: (param0: Object) => boolean): Range<Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Range<Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object) => boolean): Range<Object>;
    constructor(arg0: T, arg1: T, arg2: (param0: Object) => boolean)
    readonly comparator: (param0: Object) => boolean;
    // private hashCode: number;
    readonly maximum: T;
    readonly minimum: T;
    // private toString: string;
    contains(arg0: T): boolean;
    containsRange(arg0: Range<T>): boolean;
    elementCompareTo(arg0: T): number;
    equals(arg0: Object | null): boolean;
    fit(arg0: T): T;
    getComparator(): (param0: Object) => boolean;
    getMaximum(): T;
    getMinimum(): T;
    hashCode(): number;
    intersectionWith(arg0: Range<T>): Range<T>;
    isAfter(arg0: T): boolean;
    isAfterRange(arg0: Range<T>): boolean;
    isBefore(arg0: T): boolean;
    isBeforeRange(arg0: Range<T>): boolean;
    isEndedBy(arg0: T): boolean;
    isNaturalOrdering(): boolean;
    isOverlappedBy(arg0: Range<T>): boolean;
    isStartedBy(arg0: T): boolean;
    toString(): string;
    toString(arg0: string): string;
}