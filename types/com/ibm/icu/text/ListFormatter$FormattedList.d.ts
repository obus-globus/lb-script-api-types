import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ConstrainedFieldPosition } from '../../../../com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { FormattedValue } from '../../../../com/ibm/icu/text/FormattedValue.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class ListFormatter$FormattedList extends Object implements FormattedValue {
    constructor(arg0: FormattedStringBuilder)
    /*not mapped: */ length(): number;
    // private string: FormattedStringBuilder;
    appendTo<A extends Appendable>(arg0: A): A;
    get(arg0: number): string;
    nextPosition(arg0: ConstrainedFieldPosition): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
    toCharacterIterator(): AttributedCharacterIterator;
    toString(): string;
}