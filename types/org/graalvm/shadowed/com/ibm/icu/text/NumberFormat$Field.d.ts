import type { AttributedCharacterIterator$Attribute } from '../../../../../../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NumberFormat$Field extends Format$Field {
    static APPROXIMATELY_SIGN: NumberFormat$Field;
    static COMPACT: NumberFormat$Field;
    static CURRENCY: NumberFormat$Field;
    static DECIMAL_SEPARATOR: NumberFormat$Field;
    static EXPONENT: NumberFormat$Field;
    static EXPONENT_SIGN: NumberFormat$Field;
    static EXPONENT_SYMBOL: NumberFormat$Field;
    static FRACTION: NumberFormat$Field;
    static GROUPING_SEPARATOR: NumberFormat$Field;
    static INPUT_METHOD_SEGMENT: AttributedCharacterIterator$Attribute;
    static INTEGER: NumberFormat$Field;
    static LANGUAGE: AttributedCharacterIterator$Attribute;
    static MEASURE_UNIT: NumberFormat$Field;
    static PERCENT: NumberFormat$Field;
    static PERMILLE: NumberFormat$Field;
    static READING: AttributedCharacterIterator$Attribute;
    static SIGN: NumberFormat$Field;
    constructor(fieldName: string)
    readResolve(): Object;
}