import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDate } from '../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDate.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class LocalDate$Companion extends Object {
    // private MAX: LocalDate;
    /*not mapped: */ getMAX$kotlinx_datetime(): LocalDate;
    // private MIN: LocalDate;
    /*not mapped: */ getMIN$kotlinx_datetime(): LocalDate;
    // private serialVersionUID: number;
    Format(block: (param0: DateTimeFormatBuilder$WithDate) => void): DateTimeFormat<LocalDate>;
    fromEpochDays(epochDays: number): LocalDate;
    parse(input: CharSequence, format: DateTimeFormat<LocalDate>): LocalDate;
    parse(isoString: string): LocalDate;
    serializer(): KSerializer<LocalDate>;
}