import type { AttributedCharacterIterator$Attribute } from '../../../../../../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
export abstract class UFormat$SpanField extends Format$Field {
    static INPUT_METHOD_SEGMENT: AttributedCharacterIterator$Attribute;
    static LANGUAGE: AttributedCharacterIterator$Attribute;
    static READING: AttributedCharacterIterator$Attribute;
    constructor(name: string)
}