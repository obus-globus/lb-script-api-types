import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { OpenEndRange } from '../../kotlin/ranges/OpenEndRange.d.ts'
export class ComparableOpenEndRange<T extends Comparable<T>> extends Object implements OpenEndRange<T> {
    constructor(start: T, endExclusive: T)
    readonly endExclusive: T;
    readonly start: T;
    contains(value: T): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
}