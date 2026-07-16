import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RegexLexer$ParseGroupNameResultState extends Enum<RegexLexer$ParseGroupNameResultState> {
    static empty: RegexLexer$ParseGroupNameResultState;
    static invalidRest: RegexLexer$ParseGroupNameResultState;
    static invalidStart: RegexLexer$ParseGroupNameResultState;
    static unterminated: RegexLexer$ParseGroupNameResultState;
    static valid: RegexLexer$ParseGroupNameResultState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RegexLexer$ParseGroupNameResultState;
    static values(): RegexLexer$ParseGroupNameResultState[];
    private constructor()
    name(): "empty" | "unterminated" | "invalidStart" | "invalidRest" | "valid";
}