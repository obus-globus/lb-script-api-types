import type { FormattedStringBuilder } from '../../../../com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ConstrainedFieldPosition } from '../../../../com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { UFormat$SpanField } from '../../../../com/ibm/icu/text/UFormat$SpanField.d.ts'
import type { AttributedCharacterIterator } from '../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../java/text/FieldPosition.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FormattedValueStringBuilderImpl extends Object {
    static applySpanRange(paramarg0: FormattedStringBuilder, paramarg1: UFormat$SpanField, paramarg2: Object, paramarg3: number, paramarg4: number): void;
    static findSpan(paramarg0: FormattedStringBuilder, paramarg1: Object): number;
    static nextFieldPosition(paramarg0: FormattedStringBuilder, paramarg1: FieldPosition): boolean;
    static nextPosition(paramarg0: FormattedStringBuilder, paramarg1: ConstrainedFieldPosition, paramarg2: Format$Field): boolean;
    static toCharacterIterator(paramarg0: FormattedStringBuilder, paramarg1: Format$Field): AttributedCharacterIterator;
    constructor()
}