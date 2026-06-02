import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDate } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDate.d.ts'
import type { DateTimeFormatBuilder$WithTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithTime.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export interface DateTimeFormatBuilder$WithDateTime extends Object, DateTimeFormatBuilder$WithDate, DateTimeFormatBuilder$WithTime{
    dateTime(format: DateTimeFormat<LocalDateTime>): void;
    dayOfMonth(padding: Padding): void;
    secondFraction(fixedLength: number): void;
}