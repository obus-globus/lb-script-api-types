import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateFormatKt extends Object {
    static getISO_DATE(): DateTimeFormat<LocalDate>;
    static getISO_DATE_BASIC(): DateTimeFormat<LocalDate>;
}