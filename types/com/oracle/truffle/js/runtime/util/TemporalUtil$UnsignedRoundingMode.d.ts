import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$UnsignedRoundingMode extends Enum<TemporalUtil$UnsignedRoundingMode> {
    static EMPTY: TemporalUtil$UnsignedRoundingMode;
    static HALF_EVEN: TemporalUtil$UnsignedRoundingMode;
    static HALF_INFINITY: TemporalUtil$UnsignedRoundingMode;
    static HALF_ZERO: TemporalUtil$UnsignedRoundingMode;
    static INFINITY: TemporalUtil$UnsignedRoundingMode;
    static ZERO: TemporalUtil$UnsignedRoundingMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalUtil$UnsignedRoundingMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "EMPTY" | "ZERO" | "INFINITY" | "HALF_INFINITY" | "HALF_ZERO" | "HALF_EVEN";
}