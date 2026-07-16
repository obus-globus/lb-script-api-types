import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
import type { CharCategory$Companion } from '../../kotlin/text/CharCategory$Companion.d.ts'
export class CharCategory extends Enum<CharCategory> implements Serializable {
    static COMBINING_SPACING_MARK: CharCategory;
    static CONNECTOR_PUNCTUATION: CharCategory;
    static CONTROL: CharCategory;
    static CURRENCY_SYMBOL: CharCategory;
    static Companion: CharCategory$Companion;
    static DASH_PUNCTUATION: CharCategory;
    static DECIMAL_DIGIT_NUMBER: CharCategory;
    static ENCLOSING_MARK: CharCategory;
    static END_PUNCTUATION: CharCategory;
    static FINAL_QUOTE_PUNCTUATION: CharCategory;
    static FORMAT: CharCategory;
    static INITIAL_QUOTE_PUNCTUATION: CharCategory;
    static LETTER_NUMBER: CharCategory;
    static LINE_SEPARATOR: CharCategory;
    static LOWERCASE_LETTER: CharCategory;
    static MATH_SYMBOL: CharCategory;
    static MODIFIER_LETTER: CharCategory;
    static MODIFIER_SYMBOL: CharCategory;
    static NON_SPACING_MARK: CharCategory;
    static OTHER_LETTER: CharCategory;
    static OTHER_NUMBER: CharCategory;
    static OTHER_PUNCTUATION: CharCategory;
    static OTHER_SYMBOL: CharCategory;
    static PARAGRAPH_SEPARATOR: CharCategory;
    static PRIVATE_USE: CharCategory;
    static SPACE_SEPARATOR: CharCategory;
    static START_PUNCTUATION: CharCategory;
    static SURROGATE: CharCategory;
    static TITLECASE_LETTER: CharCategory;
    static UNASSIGNED: CharCategory;
    static UPPERCASE_LETTER: CharCategory;
    static getEntries(): CharCategory[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CharCategory;
    static values(): CharCategory[];
    private constructor(value: number, code: string)
    readonly code: string;
    readonly value: number;
    contains(char: string): boolean;
    name(): "UNASSIGNED" | "UPPERCASE_LETTER" | "LOWERCASE_LETTER" | "TITLECASE_LETTER" | "MODIFIER_LETTER" | "OTHER_LETTER" | "NON_SPACING_MARK" | "ENCLOSING_MARK" | "COMBINING_SPACING_MARK" | "DECIMAL_DIGIT_NUMBER" | "LETTER_NUMBER" | "OTHER_NUMBER" | "SPACE_SEPARATOR" | "LINE_SEPARATOR" | "PARAGRAPH_SEPARATOR" | "CONTROL" | "FORMAT" | "PRIVATE_USE" | "SURROGATE" | "DASH_PUNCTUATION" | "START_PUNCTUATION" | "END_PUNCTUATION" | "CONNECTOR_PUNCTUATION" | "OTHER_PUNCTUATION" | "MATH_SYMBOL" | "CURRENCY_SYMBOL" | "MODIFIER_SYMBOL" | "OTHER_SYMBOL" | "INITIAL_QUOTE_PUNCTUATION" | "FINAL_QUOTE_PUNCTUATION";
}