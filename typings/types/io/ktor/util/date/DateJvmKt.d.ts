import type { GMTDate } from '../../../../io/ktor/util/date/GMTDate.d.ts'
import type { Month } from '../../../../io/ktor/util/date/Month.d.ts'
import type { Calendar } from '../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateJvmKt extends Object {
    static GMTDate(seconds: number, minutes: number, hours: number, dayOfMonth: number, month: Month, year: number): GMTDate;
    static GMTDate(timestamp: number | null): GMTDate;
    static getTimeMillis(): number;
    static toDate(self: Calendar, timestamp: number | null): GMTDate;
    static toJvmDate(self: GMTDate): Date;
}