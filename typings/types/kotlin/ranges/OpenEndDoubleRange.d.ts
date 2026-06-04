import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { OpenEndRange } from '../../kotlin/ranges/OpenEndRange.d.ts'
export class OpenEndDoubleRange extends Object implements OpenEndRange<number> {
    constructor(start: number, endExclusive: number)
    // private _endExclusive: number;
    // private _start: number;
    readonly endExclusive: number;
    readonly start: number;
    contains(value: number): boolean;
    contains<T extends Comparable<T>>(value: T): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    // private lessThanOrEquals(a: number, b: number): boolean;
    toString(): string;
}