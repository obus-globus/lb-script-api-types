import type { ConstrainedFieldPosition } from '../../../../com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { FormattedValue } from '../../../../com/ibm/icu/text/FormattedValue.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class FormattedMessage extends Object implements FormattedValue {
    constructor()
    /*not mapped: */ length(): number;
    appendTo<A extends Appendable>(arg0: A): A;
    get(arg0: number): string;
    nextPosition(arg0: ConstrainedFieldPosition): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
    toCharacterIterator(): AttributedCharacterIterator;
}