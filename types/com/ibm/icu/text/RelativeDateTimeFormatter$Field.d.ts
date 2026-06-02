import type { AttributedCharacterIterator$Attribute } from '../../../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RelativeDateTimeFormatter$Field extends Format$Field {
    static INPUT_METHOD_SEGMENT: AttributedCharacterIterator$Attribute;
    static LANGUAGE: AttributedCharacterIterator$Attribute;
    static LITERAL: RelativeDateTimeFormatter$Field;
    static NUMERIC: RelativeDateTimeFormatter$Field;
    static READING: AttributedCharacterIterator$Attribute;
    private constructor(arg0: string)
    readResolve(): Object;
}