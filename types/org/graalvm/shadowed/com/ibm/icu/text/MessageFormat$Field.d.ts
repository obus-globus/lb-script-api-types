import type { AttributedCharacterIterator$Attribute } from '../../../../../../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MessageFormat$Field extends Format$Field {
    static ARGUMENT: MessageFormat$Field;
    static INPUT_METHOD_SEGMENT: AttributedCharacterIterator$Attribute;
    static LANGUAGE: AttributedCharacterIterator$Attribute;
    static READING: AttributedCharacterIterator$Attribute;
    constructor(name: string)
    readResolve(): Object;
}