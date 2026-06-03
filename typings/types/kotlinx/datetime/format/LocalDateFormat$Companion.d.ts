import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDate } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDate.d.ts'
export class LocalDateFormat$Companion extends Object {
    build(block: (param0: DateTimeFormatBuilder$WithDate) => void): DateTimeFormat<LocalDate>;
}