import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalTime } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { LocalTime$Companion } from '../../kotlinx/datetime/LocalTime$Companion.d.ts'
import type { Month as Month_2 } from '../../kotlinx/datetime/Month.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalTimeKt extends Object {
    static atDate(self: LocalTime, year: number, month: number, day: number): LocalDateTime;
    static atDate(self: LocalTime, year: number, monthNumber: number, dayOfMonth: number, fakeArgument: void): LocalDateTime;
    static atDate(self: LocalTime, year: number, month: Month, dayOfMonth: number): LocalDateTime;
    static atDate(self: LocalTime, year: number, month: Month, dayOfMonth: number, fakeArgument: void): LocalDateTime;
    static atDate(self: LocalTime, year: number, month: Month_2, day: number): LocalDateTime;
    static atDate(self: LocalTime, year: number, month: Month_2, dayOfMonth: number, fakeArgument: void): LocalDateTime;
    static atDate(self: LocalTime, date: LocalDate): LocalDateTime;
    static format(self: LocalTime, format: DateTimeFormat<LocalTime>): string;
    static getIsoTimeFormat(): DateTimeFormat<LocalTime>;
    static parseOrNull(self: LocalTime$Companion, input: CharSequence, format: DateTimeFormat<LocalTime>): LocalTime | null;
    static toLocalTime(self: string): LocalTime;
}