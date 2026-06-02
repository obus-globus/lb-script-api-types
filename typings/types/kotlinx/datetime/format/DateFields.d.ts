import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { UnsignedFieldSpec } from '../../../kotlinx/datetime/internal/format/UnsignedFieldSpec.d.ts'
export class DateFields extends Object {
    static INSTANCE: DateFields;
    readonly day: UnsignedFieldSpec<DateFieldContainer>;
    readonly dayOfYear: UnsignedFieldSpec<DateFieldContainer>;
    readonly isoDayOfWeek: UnsignedFieldSpec<DateFieldContainer>;
}