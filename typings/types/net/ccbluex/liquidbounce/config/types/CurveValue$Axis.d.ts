import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { CurveValue$Axis$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/CurveValue$Axis$Companion.d.ts'
export class CurveValue$Axis extends Record {
    static Companion: CurveValue$Axis$Companion;
    static axis(string: string, range: ClosedFloatingPointRange<number>): CurveValue$Axis;
    constructor(label: string, range: ClosedFloatingPointRange<number>)
    // private label: string;
    /*not mapped: */ label(): string;
    // private range: ClosedFloatingPointRange<number>;
    /*not mapped: */ range(): ClosedFloatingPointRange<number>;
    component1(): string;
    component2(): ClosedFloatingPointRange<number>;
    copy(label: string, range: ClosedFloatingPointRange<number>): CurveValue$Axis;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}