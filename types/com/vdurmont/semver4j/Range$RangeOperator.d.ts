import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Range$RangeOperator extends Enum<Range$RangeOperator> {
    static EQ: Range$RangeOperator;
    static GT: Range$RangeOperator;
    static GTE: Range$RangeOperator;
    static LT: Range$RangeOperator;
    static LTE: Range$RangeOperator;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Range$RangeOperator;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private s: string;
    asString(): string;
    name(): "EQ" | "LT" | "LTE" | "GT" | "GTE";
}