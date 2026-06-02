import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberFormatter$SignDisplay extends Enum<NumberFormatter$SignDisplay> {
    static ACCOUNTING: NumberFormatter$SignDisplay;
    static ACCOUNTING_ALWAYS: NumberFormatter$SignDisplay;
    static ACCOUNTING_EXCEPT_ZERO: NumberFormatter$SignDisplay;
    static ACCOUNTING_NEGATIVE: NumberFormatter$SignDisplay;
    static ALWAYS: NumberFormatter$SignDisplay;
    static AUTO: NumberFormatter$SignDisplay;
    static EXCEPT_ZERO: NumberFormatter$SignDisplay;
    static NEGATIVE: NumberFormatter$SignDisplay;
    static NEVER: NumberFormatter$SignDisplay;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NumberFormatter$SignDisplay;
    static values(): (Object | null)[];
    private constructor()
    name(): "AUTO" | "ALWAYS" | "NEVER" | "ACCOUNTING" | "ACCOUNTING_ALWAYS" | "EXCEPT_ZERO" | "ACCOUNTING_EXCEPT_ZERO" | "NEGATIVE" | "ACCOUNTING_NEGATIVE";
}