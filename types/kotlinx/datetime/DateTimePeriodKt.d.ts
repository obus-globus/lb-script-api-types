import type { Object } from '../../java/lang/Object.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
export class DateTimePeriodKt extends Object {
    static DateTimePeriod(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number): DateTimePeriod;
    static buildDateTimePeriod(paramarg0: number, paramarg1: number, paramarg2: number): DateTimePeriod;
    static plus(paramarg0: DatePeriod, paramarg1: DatePeriod): DatePeriod;
    static plus(paramarg0: DateTimePeriod, paramarg1: DateTimePeriod): DateTimePeriod;
    static toDatePeriod(paramarg0: string): DatePeriod;
    static toDateTimePeriod(paramarg0: string): DateTimePeriod;
//     static toDateTimePeriod-LRDsOJo(paramarg0: number): DateTimePeriod;
 // ; invalid because of -}