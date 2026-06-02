import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class DateTimeComponents$Formats extends Object {
    static INSTANCE: DateTimeComponents$Formats;
    readonly ISO_DATE_TIME_OFFSET: DateTimeFormat<DateTimeComponents>;
    readonly RFC_1123: DateTimeFormat<DateTimeComponents>;
}