import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalTime } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { LocalTime$Companion } from '../../kotlinx/datetime/LocalTime$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalTimeKt__LocalTimeJvmKt extends Object {
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: Month, paramarg3: number): LocalDateTime;
    static atDate(paramarg0: LocalTime, paramarg1: number, paramarg2: Month, paramarg3: number, paramarg4: void): LocalDateTime;
    static parseOrNull(paramarg0: LocalTime$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<LocalTime>): LocalTime;
}