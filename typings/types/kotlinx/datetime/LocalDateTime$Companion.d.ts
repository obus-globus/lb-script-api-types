import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { Month } from '../../kotlinx/datetime/Month.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDateTime } from '../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDateTime.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class LocalDateTime$Companion extends Object {
    // private MAX: LocalDateTime;
    /*not mapped: */ getMAX$kotlinx_datetime(): LocalDateTime;
    // private MIN: LocalDateTime;
    /*not mapped: */ getMIN$kotlinx_datetime(): LocalDateTime;
    // private serialVersionUID: number;
    Format(builder: (param0: DateTimeFormatBuilder$WithDateTime) => void): DateTimeFormat<LocalDateTime>;
    orNull(year: number, month: number, day: number, hour: number, minute: number, second: number, nanosecond: number): LocalDateTime | null;
    orNull(year: number, month: Month, day: number, hour: number, minute: number, second: number, nanosecond: number): LocalDateTime | null;
    parse(input: CharSequence, format: DateTimeFormat<LocalDateTime>): LocalDateTime;
    parse(isoString: string): LocalDateTime;
    serializer(): KSerializer<LocalDateTime>;
}