import type { Object } from '../../../java/lang/Object.d.ts'
import type { AmPmMarker } from '../../../kotlinx/datetime/format/AmPmMarker.d.ts'
import type { DecimalFraction } from '../../../kotlinx/datetime/internal/DecimalFraction.d.ts'
export interface TimeFieldContainer extends Object{
    amPm: AmPmMarker | null;
    fractionOfSecond: DecimalFraction | null;
    hour: number | null;
    hourOfAmPm: number | null;
    minute: number | null;
    nanosecond: number | null;
    second: number | null;
}