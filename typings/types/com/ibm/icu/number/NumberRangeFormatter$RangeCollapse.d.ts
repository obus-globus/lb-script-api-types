import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberRangeFormatter$RangeCollapse extends Enum<NumberRangeFormatter$RangeCollapse> {
    static ALL: NumberRangeFormatter$RangeCollapse;
    static AUTO: NumberRangeFormatter$RangeCollapse;
    static NONE: NumberRangeFormatter$RangeCollapse;
    static UNIT: NumberRangeFormatter$RangeCollapse;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NumberRangeFormatter$RangeCollapse;
    static values(): NumberRangeFormatter$RangeCollapse[];
    private constructor()
    name(): "AUTO" | "NONE" | "UNIT" | "ALL";
}