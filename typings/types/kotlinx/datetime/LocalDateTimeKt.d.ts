import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalDateTime$Companion } from '../../kotlinx/datetime/LocalDateTime$Companion.d.ts'
import type { Month as Month_2 } from '../../kotlinx/datetime/Month.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateTimeKt extends Object {
    static LocalDateTime(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): LocalDateTime;
    static LocalDateTime(paramarg0: number, paramarg1: Month, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): LocalDateTime;
    static LocalDateTime(paramarg0: number, paramarg1: Month_2, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): LocalDateTime;
    static format(paramarg0: LocalDateTime, paramarg1: DateTimeFormat<LocalDateTime>): string;
    static getIsoDateTimeFormat(): DateTimeFormat<LocalDateTime>;
    static parseOrNull(paramarg0: LocalDateTime$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<LocalDateTime>): LocalDateTime;
    static toLocalDateTime(paramarg0: string): LocalDateTime;
}