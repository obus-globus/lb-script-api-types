import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSRegexValidator$RegexStackElem extends Enum<JSRegexValidator$RegexStackElem> {
    static Group: JSRegexValidator$RegexStackElem;
    static LookAheadAssertion: JSRegexValidator$RegexStackElem;
    static LookBehindAssertion: JSRegexValidator$RegexStackElem;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSRegexValidator$RegexStackElem;
    static values(): JSRegexValidator$RegexStackElem[];
    private constructor()
    name(): "Group" | "LookAheadAssertion" | "LookBehindAssertion";
}