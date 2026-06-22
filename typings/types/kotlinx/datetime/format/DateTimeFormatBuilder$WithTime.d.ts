import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export interface DateTimeFormatBuilder$WithTime extends Object, DateTimeFormatBuilder{
    amPmHour(padding: Padding): void;
    amPmMarker(am: string, pm: string): void;
    chars(value: string): void;
    hour(padding: Padding): void;
    minute(padding: Padding): void;
    second(padding: Padding): void;
    secondFraction(fixedLength: number): void;
    secondFraction(minLength: number, maxLength: number): void;
    time(format: DateTimeFormat<LocalTime>): void;
}