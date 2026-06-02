import type { Object } from '../../../java/lang/Object.d.ts'
import type { AmPmMarker } from '../../../kotlinx/datetime/format/AmPmMarker.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { DecimalFraction } from '../../../kotlinx/datetime/internal/DecimalFraction.d.ts'
import type { GenericFieldSpec } from '../../../kotlinx/datetime/internal/format/GenericFieldSpec.d.ts'
import type { UnsignedFieldSpec } from '../../../kotlinx/datetime/internal/format/UnsignedFieldSpec.d.ts'
export class TimeFields extends Object {
    static INSTANCE: TimeFields;
    readonly amPm: GenericFieldSpec<TimeFieldContainer, AmPmMarker>;
    readonly fractionOfSecond: GenericFieldSpec<TimeFieldContainer, DecimalFraction>;
    readonly hour: UnsignedFieldSpec<TimeFieldContainer>;
    readonly hourOfAmPm: UnsignedFieldSpec<TimeFieldContainer>;
    readonly minute: UnsignedFieldSpec<TimeFieldContainer>;
    readonly second: UnsignedFieldSpec<TimeFieldContainer>;
}