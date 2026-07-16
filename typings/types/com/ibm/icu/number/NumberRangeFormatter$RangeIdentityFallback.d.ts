import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberRangeFormatter$RangeIdentityFallback extends Enum<NumberRangeFormatter$RangeIdentityFallback> {
    static APPROXIMATELY: NumberRangeFormatter$RangeIdentityFallback;
    static APPROXIMATELY_OR_SINGLE_VALUE: NumberRangeFormatter$RangeIdentityFallback;
    static RANGE: NumberRangeFormatter$RangeIdentityFallback;
    static SINGLE_VALUE: NumberRangeFormatter$RangeIdentityFallback;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NumberRangeFormatter$RangeIdentityFallback;
    static values(): NumberRangeFormatter$RangeIdentityFallback[];
    private constructor()
    name(): "SINGLE_VALUE" | "APPROXIMATELY_OR_SINGLE_VALUE" | "APPROXIMATELY" | "RANGE";
}