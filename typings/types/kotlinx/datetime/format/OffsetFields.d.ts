import type { Object } from '../../../java/lang/Object.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { FieldSign } from '../../../kotlinx/datetime/internal/format/FieldSign.d.ts'
import type { UnsignedFieldSpec } from '../../../kotlinx/datetime/internal/format/UnsignedFieldSpec.d.ts'
export class OffsetFields extends Object {
    static INSTANCE: OffsetFields;
    readonly minutesOfHour: UnsignedFieldSpec<UtcOffsetFieldContainer>;
    readonly secondsOfMinute: UnsignedFieldSpec<UtcOffsetFieldContainer>;
    // private sign: FieldSign<UtcOffsetFieldContainer>;
    readonly totalHoursAbs: UnsignedFieldSpec<UtcOffsetFieldContainer>;
}