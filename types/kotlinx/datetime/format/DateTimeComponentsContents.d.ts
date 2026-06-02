import type { Object } from '../../../java/lang/Object.d.ts'
import type { AmPmMarker } from '../../../kotlinx/datetime/format/AmPmMarker.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeFieldContainer } from '../../../kotlinx/datetime/format/DateTimeFieldContainer.d.ts'
import type { IncompleteLocalDate } from '../../../kotlinx/datetime/format/IncompleteLocalDate.d.ts'
import type { IncompleteLocalTime } from '../../../kotlinx/datetime/format/IncompleteLocalTime.d.ts'
import type { IncompleteUtcOffset } from '../../../kotlinx/datetime/format/IncompleteUtcOffset.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { UtcOffsetFieldContainer } from '../../../kotlinx/datetime/format/UtcOffsetFieldContainer.d.ts'
import type { DecimalFraction } from '../../../kotlinx/datetime/internal/DecimalFraction.d.ts'
import type { Copyable } from '../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
export class DateTimeComponentsContents extends Object implements DateFieldContainer, DateTimeFieldContainer, TimeFieldContainer, UtcOffsetFieldContainer, Copyable<DateTimeComponentsContents> {
    constructor(date: IncompleteLocalDate, time: IncompleteLocalTime, offset: IncompleteUtcOffset, timeZoneId: string | null)
    amPm: AmPmMarker | null;
    readonly date: IncompleteLocalDate;
    day: number | null;
    dayOfWeek: number | null;
    dayOfYear: number | null;
    fractionOfSecond: DecimalFraction | null;
    hour: number | null;
    hourOfAmPm: number | null;
    minute: number | null;
    monthNumber: number | null;
    nanosecond: number | null;
    readonly offset: IncompleteUtcOffset;
    offsetHours: number | null;
    offsetIsNegative: boolean | null;
    offsetMinutesOfHour: number | null;
    offsetSecondsOfMinute: number | null;
    second: number | null;
    readonly time: IncompleteLocalTime;
    timeZoneId: string | null;
    year: number | null;
    copy(): DateTimeComponentsContents;
    equals(other: Object | null): boolean;
    hashCode(): number;
}