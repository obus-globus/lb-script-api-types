import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { ConstrainedFieldPosition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
export class FormattedValueFieldPositionIteratorImpl extends Object {
    static addOverlapSpans(paramattributes: FieldPosition[], paramspanField: Format$Field, paramfirstIndex: number): void;
    static nextPosition(paramattributes: FieldPosition[], paramcfpos: ConstrainedFieldPosition): boolean;
    static sort(paramattributes: FieldPosition[]): void;
    static toCharacterIterator(paramcs: CharSequence, paramattributes: FieldPosition[]): AttributedCharacterIterator;
    private constructor()
}