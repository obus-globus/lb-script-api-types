import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalUtil$RoundingMode extends Enum<TemporalUtil$RoundingMode> {
    static CEIL: TemporalUtil$RoundingMode;
    static EMPTY: TemporalUtil$RoundingMode;
    static EXPAND: TemporalUtil$RoundingMode;
    static FLOOR: TemporalUtil$RoundingMode;
    static HALF_CEIL: TemporalUtil$RoundingMode;
    static HALF_EVEN: TemporalUtil$RoundingMode;
    static HALF_EXPAND: TemporalUtil$RoundingMode;
    static HALF_FLOOR: TemporalUtil$RoundingMode;
    static HALF_TRUNC: TemporalUtil$RoundingMode;
    static TRUNC: TemporalUtil$RoundingMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalUtil$RoundingMode;
    static values(): TemporalUtil$RoundingMode[];
    private constructor()
    name(): "EMPTY" | "CEIL" | "FLOOR" | "EXPAND" | "TRUNC" | "HALF_EXPAND" | "HALF_TRUNC" | "HALF_EVEN" | "HALF_FLOOR" | "HALF_CEIL";
}