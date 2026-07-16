import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JavaRegexValidator$CurTermState extends Enum<JavaRegexValidator$CurTermState> {
    static LookAheadAssertion: JavaRegexValidator$CurTermState;
    static LookBehindAssertion: JavaRegexValidator$CurTermState;
    static Null: JavaRegexValidator$CurTermState;
    static Other: JavaRegexValidator$CurTermState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JavaRegexValidator$CurTermState;
    static values(): JavaRegexValidator$CurTermState[];
    private constructor()
    name(): "Null" | "LookAheadAssertion" | "LookBehindAssertion" | "Other";
}