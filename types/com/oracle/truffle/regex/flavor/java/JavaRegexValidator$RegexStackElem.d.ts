import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JavaRegexValidator$RegexStackElem extends Enum<JavaRegexValidator$RegexStackElem> {
    static Group: JavaRegexValidator$RegexStackElem;
    static LookAheadAssertion: JavaRegexValidator$RegexStackElem;
    static LookBehindAssertion: JavaRegexValidator$RegexStackElem;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JavaRegexValidator$RegexStackElem;
    static values(): (Object | null)[];
    private constructor()
    name(): "Group" | "LookAheadAssertion" | "LookBehindAssertion";
}