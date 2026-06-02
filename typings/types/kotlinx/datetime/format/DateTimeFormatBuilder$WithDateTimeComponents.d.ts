import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDateTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDateTime.d.ts'
import type { DateTimeFormatBuilder$WithUtcOffset } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithUtcOffset.d.ts'
export interface DateTimeFormatBuilder$WithDateTimeComponents extends Object, DateTimeFormatBuilder$WithDateTime, DateTimeFormatBuilder$WithUtcOffset{
    dateTimeComponents(format: DateTimeFormat<DateTimeComponents>): void;
    timeZoneId(): void;
}