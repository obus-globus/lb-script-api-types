import type { FormattedStringBuilder$FieldWrapper } from '../../../../com/ibm/icu/impl/FormattedStringBuilder$FieldWrapper.d.ts'
import type { UFormat$SpanField } from '../../../../com/ibm/icu/text/UFormat$SpanField.d.ts'
import type { Format$Field } from '../../../../java/text/Format$Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FormattedValueStringBuilderImpl$SpanFieldPlaceholder extends Object implements FormattedStringBuilder$FieldWrapper {
    constructor()
    length: number;
    normalField: Format$Field;
    spanField: UFormat$SpanField;
    start: number;
    value: Object;
    unwrap(): Format$Field;
}