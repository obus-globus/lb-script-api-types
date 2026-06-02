import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { AmPmMarker } from '../../../kotlinx/datetime/format/AmPmMarker.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeFieldContainer } from '../../../kotlinx/datetime/format/DateTimeFieldContainer.d.ts'
import type { IncompleteLocalDate } from '../../../kotlinx/datetime/format/IncompleteLocalDate.d.ts'
import type { IncompleteLocalTime } from '../../../kotlinx/datetime/format/IncompleteLocalTime.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { DecimalFraction } from '../../../kotlinx/datetime/internal/DecimalFraction.d.ts'
import type { Copyable } from '../../../kotlinx/datetime/internal/format/parser/Copyable.d.ts'
export class IncompleteLocalDateTime extends Object implements DateFieldContainer, DateTimeFieldContainer, TimeFieldContainer, Copyable<IncompleteLocalDateTime> {
    constructor(date: IncompleteLocalDate, time: IncompleteLocalTime)
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
    second: number | null;
    readonly time: IncompleteLocalTime;
    year: number | null;
    copy(): IncompleteLocalDateTime;
    populateFrom(dateTime: LocalDateTime): void;
    toLocalDateTime(): LocalDateTime;
}