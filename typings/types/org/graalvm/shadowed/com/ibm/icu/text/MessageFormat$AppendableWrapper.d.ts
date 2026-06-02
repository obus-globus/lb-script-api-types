import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Format } from '../../../../../../../java/text/Format.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { MessageFormat$AttributeAndPosition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MessageFormat$AttributeAndPosition.d.ts'
export class MessageFormat$AppendableWrapper extends Object {
    static append(paramresult: Appendable, paramiterator: CharacterIterator): number;
    constructor(sb: StringBuffer)
    constructor(sb: StringBuilder)
    // private app: Appendable;
    // private attributes: MessageFormat$AttributeAndPosition[];
    // private length: number;
    append(iterator: CharacterIterator): void;
    append(s: CharSequence): void;
    append(s: CharSequence, start: number, limit: number): void;
    formatAndAppend(formatter: Format, arg: Object): void;
    formatAndAppend(formatter: Format, arg: Object, argString: string): void;
    useAttributes(): void;
}