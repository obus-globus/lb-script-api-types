import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalDateTime$Companion } from '../../kotlinx/datetime/LocalDateTime$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateTimeKt__LocalDateTimeJvmKt extends Object {
    static LocalDateTime(paramarg0: number, paramarg1: Month, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): LocalDateTime;
    static parseOrNull(paramarg0: LocalDateTime$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<LocalDateTime>): LocalDateTime;
}