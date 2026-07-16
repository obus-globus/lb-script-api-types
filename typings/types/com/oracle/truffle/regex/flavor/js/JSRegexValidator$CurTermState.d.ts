import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSRegexValidator$CurTermState extends Enum<JSRegexValidator$CurTermState> {
    static LookAheadAssertion: JSRegexValidator$CurTermState;
    static LookBehindAssertion: JSRegexValidator$CurTermState;
    static Null: JSRegexValidator$CurTermState;
    static Other: JSRegexValidator$CurTermState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSRegexValidator$CurTermState;
    static values(): JSRegexValidator$CurTermState[];
    private constructor()
    name(): "Null" | "LookAheadAssertion" | "LookBehindAssertion" | "Other";
}