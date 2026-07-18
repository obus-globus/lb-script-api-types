import type { DateTimeFormatter } from '../../../../java/time/format/DateTimeFormatter.d.ts'
import type { Temporal } from '../../../../java/time/temporal/Temporal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpDateJvmKt extends Object {
    static getHttpDateFormat(): DateTimeFormatter;
    static toHttpDateString(self: Temporal): string;
}