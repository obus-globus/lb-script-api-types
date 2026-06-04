import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { ClosedFloatingPointRange } from '../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
export class ClosedDoubleRange extends Object implements ClosedFloatingPointRange<number> {
    constructor(start: number, endInclusive: number)
    // private _endInclusive: number;
    // private _start: number;
    readonly endInclusive: number;
    readonly start: number;
    contains(value: number): boolean;
    contains<T extends Comparable<T>>(value: T): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    lessThanOrEquals(a: number, b: number): boolean;
    toString(): string;
}