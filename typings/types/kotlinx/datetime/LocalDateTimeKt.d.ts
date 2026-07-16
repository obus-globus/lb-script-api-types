import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalDateTime$Companion } from '../../kotlinx/datetime/LocalDateTime$Companion.d.ts'
import type { Month as Month_2 } from '../../kotlinx/datetime/Month.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateTimeKt extends Object {
    static LocalDateTime(year: number, monthNumber: number, dayOfMonth: number, hour: number, minute: number, second: number, nanosecond: number): LocalDateTime;
    static LocalDateTime(year: number, month: Month, dayOfMonth: number, hour: number, minute: number, second: number, nanosecond: number): LocalDateTime;
    static LocalDateTime(year: number, month: Month_2, dayOfMonth: number, hour: number, minute: number, second: number, nanosecond: number): LocalDateTime;
    static format(self: LocalDateTime, format: DateTimeFormat<LocalDateTime>): string;
    static getIsoDateTimeFormat(): DateTimeFormat<LocalDateTime>;
    static parseOrNull(self: LocalDateTime$Companion, input: CharSequence, format: DateTimeFormat<LocalDateTime>): LocalDateTime | null;
    static toLocalDateTime(self: string): LocalDateTime;
}