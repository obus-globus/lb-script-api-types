import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class NumberRangeFormatter$RangeIdentityResult extends Enum<NumberRangeFormatter$RangeIdentityResult> {
    static EQUAL_AFTER_ROUNDING: NumberRangeFormatter$RangeIdentityResult;
    static EQUAL_BEFORE_ROUNDING: NumberRangeFormatter$RangeIdentityResult;
    static NOT_EQUAL: NumberRangeFormatter$RangeIdentityResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NumberRangeFormatter$RangeIdentityResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "EQUAL_BEFORE_ROUNDING" | "EQUAL_AFTER_ROUNDING" | "NOT_EQUAL";
}