import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
import type { ClosedFloatingPointRange } from '../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClosedRange } from '../../kotlin/ranges/ClosedRange.d.ts'
import type { OpenEndRange } from '../../kotlin/ranges/OpenEndRange.d.ts'
export class RangesKt__RangesKt extends Object {
    static checkStepIsPositive(isPositive: boolean, step: Number): void;
    static rangeTo<T extends Comparable<T>>(self: T, that: T): ClosedRange<T>;
    static rangeTo(self: number, that: number): ClosedFloatingPointRange<number>;
    static rangeUntil<T extends Comparable<T>>(self: T, that: T): OpenEndRange<T>;
    static rangeUntil(self: number, that: number): OpenEndRange<number>;
}