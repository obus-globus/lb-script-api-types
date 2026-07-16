import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class NumberRangeFormatter$RangeIdentityResult extends Enum<NumberRangeFormatter$RangeIdentityResult> {
    static EQUAL_AFTER_ROUNDING: NumberRangeFormatter$RangeIdentityResult;
    static EQUAL_BEFORE_ROUNDING: NumberRangeFormatter$RangeIdentityResult;
    static NOT_EQUAL: NumberRangeFormatter$RangeIdentityResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NumberRangeFormatter$RangeIdentityResult;
    static values(): NumberRangeFormatter$RangeIdentityResult[];
    private constructor()
    name(): "EQUAL_BEFORE_ROUNDING" | "EQUAL_AFTER_ROUNDING" | "NOT_EQUAL";
}