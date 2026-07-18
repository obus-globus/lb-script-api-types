import type { GMTDate } from '../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DateUtilsKt extends Object {
    static fromCookieToGmtDate(self: string): GMTDate;
    static fromHttpToGmtDate(self: string): GMTDate;
    static toHttpDate(self: GMTDate): string;
}