import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSRegexValidator$CurTermState extends Enum<JSRegexValidator$CurTermState> {
    static LookAheadAssertion: JSRegexValidator$CurTermState;
    static LookBehindAssertion: JSRegexValidator$CurTermState;
    static Null: JSRegexValidator$CurTermState;
    static Other: JSRegexValidator$CurTermState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSRegexValidator$CurTermState;
    static values(): JSRegexValidator$CurTermState[];
    private constructor()
    name(): "Null" | "LookAheadAssertion" | "LookBehindAssertion" | "Other";
}