import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UnicodeSet$SpanCondition extends Enum<UnicodeSet$SpanCondition> {
    static CONDITION_COUNT: UnicodeSet$SpanCondition;
    static CONTAINED: UnicodeSet$SpanCondition;
    static NOT_CONTAINED: UnicodeSet$SpanCondition;
    static SIMPLE: UnicodeSet$SpanCondition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UnicodeSet$SpanCondition;
    static values(): UnicodeSet$SpanCondition[];
    private constructor()
    name(): "NOT_CONTAINED" | "CONTAINED" | "SIMPLE" | "CONDITION_COUNT";
}