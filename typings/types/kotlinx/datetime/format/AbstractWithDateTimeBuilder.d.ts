import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { AbstractWithDateBuilder } from '../../../kotlinx/datetime/format/AbstractWithDateBuilder.d.ts'
import type { AbstractWithTimeBuilder } from '../../../kotlinx/datetime/format/AbstractWithTimeBuilder.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeFieldContainer } from '../../../kotlinx/datetime/format/DateTimeFieldContainer.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDateTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDateTime.d.ts'
import type { DayOfWeekNames } from '../../../kotlinx/datetime/format/DayOfWeekNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { TimeFieldContainer } from '../../../kotlinx/datetime/format/TimeFieldContainer.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export interface AbstractWithDateTimeBuilder extends Object, AbstractWithDateBuilder, AbstractWithTimeBuilder, DateTimeFormatBuilder$WithDateTime{
    addFormatStructureForDate(structure: FormatStructure<DateFieldContainer>): void;
    addFormatStructureForDateTime(structure: FormatStructure<DateTimeFieldContainer>): void;
    addFormatStructureForTime(structure: FormatStructure<TimeFieldContainer>): void;
    addFormatStructureForYearMonth(structure: FormatStructure<YearMonthFieldContainer>): void;
    amPmHour(padding: Padding): void;
    amPmMarker(am: string, pm: string): void;
    chars(value: string): void;
    date(format: DateTimeFormat<LocalDate>): void;
    dateTime(format: DateTimeFormat<LocalDateTime>): void;
    day(padding: Padding): void;
    dayOfWeek(names: DayOfWeekNames): void;
    dayOfYear(padding: Padding): void;
    hour(padding: Padding): void;
    minute(padding: Padding): void;
    second(padding: Padding): void;
    secondFraction(minLength: number, maxLength: number): void;
    time(format: DateTimeFormat<LocalTime>): void;
}