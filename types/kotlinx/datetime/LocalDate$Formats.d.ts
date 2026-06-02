import type { Object } from '../../java/lang/Object.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDate$Formats extends Object {
    static INSTANCE: LocalDate$Formats;
    readonly ISO: DateTimeFormat<LocalDate>;
    readonly ISO_BASIC: DateTimeFormat<LocalDate>;
}