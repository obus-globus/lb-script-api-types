import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalTime } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithTime } from '../../kotlinx/datetime/format/DateTimeFormatBuilder$WithTime.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class LocalTime$Companion extends Object {
    // private MAX: LocalTime;
    /*not mapped: */ getMAX$kotlinx_datetime(): LocalTime;
    // private MIN: LocalTime;
    /*not mapped: */ getMIN$kotlinx_datetime(): LocalTime;
    // private serialVersionUID: number;
    Format(builder: (param0: DateTimeFormatBuilder$WithTime) => void): DateTimeFormat<LocalTime>;
    fromMillisecondOfDay(millisecondOfDay: number): LocalTime;
    fromNanosecondOfDay(nanosecondOfDay: number): LocalTime;
    fromSecondOfDay(secondOfDay: number): LocalTime;
    parse(input: CharSequence, format: DateTimeFormat<LocalTime>): LocalTime;
    parse(isoString: string): LocalTime;
    serializer(): KSerializer<LocalTime>;
}