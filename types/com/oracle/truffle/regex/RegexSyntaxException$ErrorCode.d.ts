import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RegexSyntaxException$ErrorCode extends Enum<RegexSyntaxException$ErrorCode> {
    static InvalidBackReference: RegexSyntaxException$ErrorCode;
    static InvalidCharacterClass: RegexSyntaxException$ErrorCode;
    static InvalidEscape: RegexSyntaxException$ErrorCode;
    static InvalidFlag: RegexSyntaxException$ErrorCode;
    static InvalidGroup: RegexSyntaxException$ErrorCode;
    static InvalidInlineFlag: RegexSyntaxException$ErrorCode;
    static InvalidLookbehind: RegexSyntaxException$ErrorCode;
    static InvalidNamedGroup: RegexSyntaxException$ErrorCode;
    static InvalidOption: RegexSyntaxException$ErrorCode;
    static InvalidQuantifier: RegexSyntaxException$ErrorCode;
    static InvalidSubexpressionCall: RegexSyntaxException$ErrorCode;
    static TRegexBailout: RegexSyntaxException$ErrorCode;
    static UnfinishedSequence: RegexSyntaxException$ErrorCode;
    static UnmatchedBracket: RegexSyntaxException$ErrorCode;
    static UnmatchedParenthesis: RegexSyntaxException$ErrorCode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RegexSyntaxException$ErrorCode;
    static values(): (Object | null)[];
    private constructor()
    intValue(): number;
    name(): "InvalidBackReference" | "InvalidCharacterClass" | "InvalidEscape" | "InvalidFlag" | "InvalidGroup" | "InvalidInlineFlag" | "InvalidLookbehind" | "InvalidNamedGroup" | "InvalidOption" | "InvalidQuantifier" | "InvalidSubexpressionCall" | "UnfinishedSequence" | "UnmatchedBracket" | "UnmatchedParenthesis" | "TRegexBailout";
}