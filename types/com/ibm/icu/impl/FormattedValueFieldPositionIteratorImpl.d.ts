import type { ConstrainedFieldPosition } from '../../../../com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class FormattedValueFieldPositionIteratorImpl extends Object {
    static addOverlapSpans(paramarg0: FieldPosition[], paramarg1: Format$Field, paramarg2: number): void;
    static nextPosition(paramarg0: FieldPosition[], paramarg1: ConstrainedFieldPosition): boolean;
    static sort(paramarg0: FieldPosition[]): void;
    static toCharacterIterator(paramarg0: CharSequence, paramarg1: FieldPosition[]): AttributedCharacterIterator;
    private constructor()
}