import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UnicodeSetSpanner$CountMethod extends Enum<UnicodeSetSpanner$CountMethod> {
    static MIN_ELEMENTS: UnicodeSetSpanner$CountMethod;
    static WHOLE_SPAN: UnicodeSetSpanner$CountMethod;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UnicodeSetSpanner$CountMethod;
    static values(): UnicodeSetSpanner$CountMethod[];
    private constructor()
    name(): "WHOLE_SPAN" | "MIN_ELEMENTS";
}