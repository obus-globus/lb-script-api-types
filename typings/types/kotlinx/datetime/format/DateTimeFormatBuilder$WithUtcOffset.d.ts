import type { Object } from '../../../java/lang/Object.d.ts'
import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export interface DateTimeFormatBuilder$WithUtcOffset extends Object, DateTimeFormatBuilder{
    chars(value: string): void;
    offset(format: DateTimeFormat<UtcOffset>): void;
    offsetHours(padding: Padding): void;
    offsetMinutesOfHour(padding: Padding): void;
    offsetSecondsOfMinute(padding: Padding): void;
}