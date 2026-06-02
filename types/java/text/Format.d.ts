import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { StringBuffer } from '../../java/lang/StringBuffer.d.ts'
import type { AttributedCharacterIterator } from '../../java/text/AttributedCharacterIterator.d.ts'
import type { AttributedCharacterIterator$Attribute } from '../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { FieldPosition } from '../../java/text/FieldPosition.d.ts'
import type { Format$StringBuf } from '../../java/text/Format$StringBuf.d.ts'
import type { ParsePosition } from '../../java/text/ParsePosition.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export abstract class Format extends Object implements Serializable, Cloneable {
    constructor()
    clone(): Object;
    protected clone(): Object;
    createAttributedCharacterIterator(arg0: AttributedCharacterIterator, arg1: AttributedCharacterIterator$Attribute, arg2: Object): AttributedCharacterIterator;
    createAttributedCharacterIterator(arg0: AttributedCharacterIterator[]): AttributedCharacterIterator;
    createAttributedCharacterIterator(arg0: string): AttributedCharacterIterator;
    createAttributedCharacterIterator(arg0: string, arg1: AttributedCharacterIterator$Attribute, arg2: Object): AttributedCharacterIterator;
    format(arg0: Object): string;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: Object, arg1: Format$StringBuf, arg2: FieldPosition): Format$StringBuf;
    formatToCharacterIterator(arg0: Object): AttributedCharacterIterator;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
}