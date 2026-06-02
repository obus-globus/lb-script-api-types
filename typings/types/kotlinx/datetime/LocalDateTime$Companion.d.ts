import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDateTime } from '../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDateTime.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class LocalDateTime$Companion extends Object {
    // private MAX: LocalDateTime;
    /*not mapped: */ getMAX$kotlinx_datetime(): LocalDateTime;
    // private MIN: LocalDateTime;
    /*not mapped: */ getMIN$kotlinx_datetime(): LocalDateTime;
    // private serialVersionUID: number;
    Format(builder: Function1<DateTimeFormatBuilder$WithDateTime, void>): DateTimeFormat<LocalDateTime>;
    parse(input: CharSequence, format: DateTimeFormat<LocalDateTime>): LocalDateTime;
    parse(isoString: string): LocalDateTime;
    serializer(): KSerializer<LocalDateTime>;
}