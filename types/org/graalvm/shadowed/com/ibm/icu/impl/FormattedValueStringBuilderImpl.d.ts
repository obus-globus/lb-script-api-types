import type { AttributedCharacterIterator } from '../../../../../../../java/text/AttributedCharacterIterator.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Format$Field } from '../../../../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedStringBuilder } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/FormattedStringBuilder.d.ts'
import type { ConstrainedFieldPosition } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ConstrainedFieldPosition.d.ts'
import type { UFormat$SpanField } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UFormat$SpanField.d.ts'
export class FormattedValueStringBuilderImpl extends Object {
    static applySpanRange(paramself: FormattedStringBuilder, paramspanField: UFormat$SpanField, paramvalue: Object, paramstart: number, paramend: number): void;
    static findSpan(paramself: FormattedStringBuilder, paramvalue: Object): number;
    static nextFieldPosition(paramself: FormattedStringBuilder, paramfp: FieldPosition): boolean;
    static nextPosition(paramself: FormattedStringBuilder, paramcfpos: ConstrainedFieldPosition, paramnumericField: Format$Field): boolean;
    static toCharacterIterator(paramself: FormattedStringBuilder, paramnumericField: Format$Field): AttributedCharacterIterator;
    constructor()
}