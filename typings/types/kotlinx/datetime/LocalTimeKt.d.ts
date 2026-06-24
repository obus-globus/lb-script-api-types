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
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: number, paramarg3: number): LocalDateTime;
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: void): LocalDateTime;
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: Month, paramarg3: number): LocalDateTime;
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: Month, paramarg3: number, paramarg4: void): LocalDateTime;
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: Month_2, paramarg3: number): LocalDateTime;
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: Month_2, paramarg3: number, paramarg4: void): LocalDateTime;
    static atDate(paramarg0: LocalTime, paramarg1: LocalDate): LocalDateTime;
    static format(paramarg0: LocalTime, paramarg1: DateTimeFormat<LocalTime>): string;
    static getIsoTimeFormat(): DateTimeFormat<LocalTime>;
    static parseOrNull(paramarg0: LocalTime$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<LocalTime>): LocalTime;
    static toLocalTime(paramarg0: string): LocalTime;
}