import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UnicodeSetSpanner$CountMethod extends Enum<UnicodeSetSpanner$CountMethod> {
    static MIN_ELEMENTS: UnicodeSetSpanner$CountMethod;
    static WHOLE_SPAN: UnicodeSetSpanner$CountMethod;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UnicodeSetSpanner$CountMethod;
    static values(): UnicodeSetSpanner$CountMethod[];
    private constructor()
    name(): "WHOLE_SPAN" | "MIN_ELEMENTS";
}