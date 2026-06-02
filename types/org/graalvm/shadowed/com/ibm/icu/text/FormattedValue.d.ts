import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { ConstrainedFieldPosition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
export interface FormattedValue extends Object, CharSequence{
    appendTo<A extends Appendable>(appendable: A): A;
    chars(): IntStream;
    codePoints(): IntStream;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    isEmpty(): boolean;
    nextPosition(cfpos: ConstrainedFieldPosition): boolean;
    toCharacterIterator(): AttributedCharacterIterator;
}