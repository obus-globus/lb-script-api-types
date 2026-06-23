import type { Object } from '../../java/lang/Object.d.ts'
import type { Number } from '../../java/lang/Number.d.ts'
import type { ClosedFloatingPointRange } from '../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ClosedRange } from '../../kotlin/ranges/ClosedRange.d.ts'
import type { OpenEndRange } from '../../kotlin/ranges/OpenEndRange.d.ts'
export class RangesKt__RangesKt extends Object {
    static checkStepIsPositive(paramarg0: boolean, paramarg1: Number): void;
    static rangeTo(paramarg0: Object | null, paramarg1: Object | null): ClosedRange<any>;
    static rangeTo(paramarg0: number, paramarg1: number): ClosedFloatingPointRange<number>;
    static rangeTo(paramarg0: number, paramarg1: number): ClosedFloatingPointRange<number>;
    static rangeUntil(paramarg0: Object | null, paramarg1: Object | null): OpenEndRange<any>;
    static rangeUntil(paramarg0: number, paramarg1: number): OpenEndRange<number>;
    static rangeUntil(paramarg0: number, paramarg1: number): OpenEndRange<number>;
}