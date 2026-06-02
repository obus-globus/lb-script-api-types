import type { LineMetrics } from '../../java/awt/font/LineMetrics.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class CoreMetrics extends Object {
    static get(paramarg0: LineMetrics): CoreMetrics;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number)
    ascent: number;
    baselineIndex: number;
    baselineOffsets: number[];
    descent: number;
    height: number;
    italicAngle: number;
    leading: number;
    ssOffset: number;
    strikethroughOffset: number;
    strikethroughThickness: number;
    underlineOffset: number;
    underlineThickness: number;
    effectiveBaselineOffset(arg0: number[]): number;
    equals(arg0: Object | null): boolean;
    equals(arg0: CoreMetrics): boolean;
    hashCode(): number;
}