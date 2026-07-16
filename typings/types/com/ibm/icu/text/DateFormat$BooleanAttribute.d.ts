import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DateFormat$BooleanAttribute extends Enum<DateFormat$BooleanAttribute> {
    static PARSE_ALLOW_NUMERIC: DateFormat$BooleanAttribute;
    static PARSE_ALLOW_WHITESPACE: DateFormat$BooleanAttribute;
    static PARSE_MULTIPLE_PATTERNS_FOR_MATCH: DateFormat$BooleanAttribute;
    static PARSE_PARTIAL_LITERAL_MATCH: DateFormat$BooleanAttribute;
    static PARSE_PARTIAL_MATCH: DateFormat$BooleanAttribute;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DateFormat$BooleanAttribute;
    static values(): DateFormat$BooleanAttribute[];
    private constructor()
    name(): "PARSE_ALLOW_WHITESPACE" | "PARSE_ALLOW_NUMERIC" | "PARSE_MULTIPLE_PATTERNS_FOR_MATCH" | "PARSE_PARTIAL_LITERAL_MATCH" | "PARSE_PARTIAL_MATCH";
}