import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JavaRegexValidator$RegexStackElem extends Enum<JavaRegexValidator$RegexStackElem> {
    static Group: JavaRegexValidator$RegexStackElem;
    static LookAheadAssertion: JavaRegexValidator$RegexStackElem;
    static LookBehindAssertion: JavaRegexValidator$RegexStackElem;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JavaRegexValidator$RegexStackElem;
    static values(): JavaRegexValidator$RegexStackElem[];
    private constructor()
    name(): "Group" | "LookAheadAssertion" | "LookBehindAssertion";
}