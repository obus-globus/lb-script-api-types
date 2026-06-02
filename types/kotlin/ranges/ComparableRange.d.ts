import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { ClosedRange } from '../../kotlin/ranges/ClosedRange.d.ts'
export class ComparableRange<T extends Comparable<T>> extends Object implements ClosedRange<T> {
    constructor(start: T, endInclusive: T)
    readonly endInclusive: T;
    readonly start: T;
    contains(value: T): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
}