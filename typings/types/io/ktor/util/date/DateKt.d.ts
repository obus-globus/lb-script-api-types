import type { GMTDate } from '../../../../io/ktor/util/date/GMTDate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Duration } from '../../../../kotlin/time/Duration.d.ts'
export class DateKt extends Object {
    static minus(self: GMTDate, milliseconds: number): GMTDate;
// (invalid TS: name contains '-')     static minus-HG0u8IE(self: GMTDate, duration: Duration): GMTDate;
    static plus(self: GMTDate, milliseconds: number): GMTDate;
// (invalid TS: name contains '-')     static plus-HG0u8IE(self: GMTDate, duration: Duration): GMTDate;
    static truncateToSeconds(self: GMTDate): GMTDate;
}