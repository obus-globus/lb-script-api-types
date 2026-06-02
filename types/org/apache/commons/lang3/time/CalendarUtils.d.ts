import type { LocalDate } from '../../../../../java/time/LocalDate.d.ts'
import type { LocalDateTime } from '../../../../../java/time/LocalDateTime.d.ts'
import type { OffsetDateTime } from '../../../../../java/time/OffsetDateTime.d.ts'
import type { ZonedDateTime } from '../../../../../java/time/ZonedDateTime.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CalendarUtils extends Object {
    static INSTANCE: CalendarUtils;
    static getInstance(): CalendarUtils;
    static toLocalDateTime(paramarg0: Calendar): LocalDateTime;
    static toOffsetDateTime(paramarg0: Calendar): OffsetDateTime;
    static toZonedDateTime(paramarg0: Calendar): ZonedDateTime;
    constructor(arg0: Calendar)
    constructor(arg0: Calendar, arg1: Locale)
    // private calendar: Calendar;
    // private locale: Locale;
    getDayOfMonth(): number;
    getDayOfYear(): number;
    getMonth(): number;
    getMonthDisplayNames(arg0: number): string[];
    getStandaloneLongMonthNames(): string[];
    getStandaloneShortMonthNames(): string[];
    getYear(): number;
    toLocalDate(): LocalDate;
    toLocalDateTime(): LocalDateTime;
    toOffsetDateTime(): OffsetDateTime;
    toZonedDateTime(): ZonedDateTime;
}