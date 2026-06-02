import type { RegexSource } from '../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexLexer$ClassSetOperator } from '../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer$ClassSetOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsErrorMessages extends Object {
    static BOTH_FLAGS_SET_U_V: string;
    static CHAR_CLASS_RANGE_OUT_OF_ORDER: string;
    static COMPLEMENT_OF_STRING_SET: string;
    static EMPTY_GROUP_NAME: string;
    static EMPTY_MODIFIER: string;
    static ENDS_WITH_UNFINISHED_ESCAPE_SEQUENCE: string;
    static ENDS_WITH_UNFINISHED_UNICODE_PROPERTY: string;
    static INCOMPLETE_MODIFIER: string;
    static INCOMPLETE_QUANTIFIER: string;
    static INVALID_CHARACTER_CLASS: string;
    static INVALID_CHARACTER_IN_CHARACTER_CLASS: string;
    static INVALID_CONTROL_CHAR_ESCAPE: string;
    static INVALID_ESCAPE: string;
    static INVALID_GROUP: string;
    static INVALID_GROUP_NAME_PART: string;
    static INVALID_GROUP_NAME_START: string;
    static INVALID_MODIFIER: string;
    static INVALID_UNICODE_ESCAPE: string;
    static INVALID_UNICODE_PROPERTY: string;
    static MISSING_GROUP_FOR_BACKREFERENCE: string;
    static MISSING_GROUP_NAME: string;
    static MODIFIER_BOTH_ADDING_AND_REMOVING_FLAG: string;
    static MULTIPLE_GROUPS_SAME_NAME: string;
    static QUANTIFIER_ON_LOOKAHEAD_ASSERTION: string;
    static QUANTIFIER_ON_LOOKBEHIND_ASSERTION: string;
    static QUANTIFIER_ON_QUANTIFIER: string;
    static QUANTIFIER_OUT_OF_ORDER: string;
    static QUANTIFIER_WITHOUT_TARGET: string;
    static REPEATED_FLAG: string;
    static REPEATED_FLAG_IN_MODIFIER: string;
    static UNMATCHED_LEFT_BRACKET: string;
    static UNMATCHED_RIGHT_BRACE: string;
    static UNMATCHED_RIGHT_BRACKET: string;
    static UNMATCHED_RIGHT_PARENTHESIS: string;
    static UNSUPPORTED_FLAG: string;
    static UNSUPPORTED_FLAG_IN_MODIFIER: string;
    static UNTERMINATED_CHARACTER_RANGE: string;
    static UNTERMINATED_GROUP: string;
    static UNTERMINATED_GROUP_NAME: string;
    static UNTERMINATED_STRING_SET: string;
    static flagNotAllowedInModifier(paramflagChar: string): string;
    static invalidRegularExpression(paramsource: RegexSource, parammessage: string): string;
    static missingClassSetOperand(paramoperator: RegexLexer$ClassSetOperator): string;
    static mixedOperatorsInClassSet(paramleftOperator: RegexLexer$ClassSetOperator, paramrightOperator: RegexLexer$ClassSetOperator): string;
    static rangeAsClassSetOperand(paramoperator: RegexLexer$ClassSetOperator): string;
    static unexpectedCharacterInClassSet(paramcodePoint: number): string;
    static unexpectedDoublePunctuatorInClassSet(parampunctuator: string): string;
    constructor()
}