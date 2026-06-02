import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ConstrainedFieldPosition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { FormattedValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/FormattedValue.d.ts'
export class ListFormatter$FormattedList extends Object implements FormattedValue {
    constructor(string: FormattedStringBuilder)
    /*not mapped: */ length(): number;
    // private string: FormattedStringBuilder;
    appendTo<A extends Appendable>(appendable: A): A;
    get(index: number): string;
    nextPosition(cfpos: ConstrainedFieldPosition): boolean;
    subSequence(start: number, end: number): CharSequence;
    toCharacterIterator(): AttributedCharacterIterator;
    toString(): string;
}