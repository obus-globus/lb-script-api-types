import type { MessageFormat$AttributeAndPosition } from '../../../../com/ibm/icu/text/MessageFormat$AttributeAndPosition.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Format } from '../../../../java/text/Format.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class MessageFormat$AppendableWrapper extends Object {
    static append(paramarg0: Appendable, paramarg1: CharacterIterator): number;
    constructor(arg0: StringBuffer)
    constructor(arg0: StringBuilder)
    // private app: Appendable;
    // private attributes: MessageFormat$AttributeAndPosition[];
    // private length: number;
    append(arg0: CharacterIterator): void;
    append(arg0: CharSequence): void;
    append(arg0: CharSequence, arg1: number, arg2: number): void;
    formatAndAppend(arg0: Format, arg1: Object): void;
    formatAndAppend(arg0: Format, arg1: Object, arg2: string): void;
    useAttributes(): void;
}