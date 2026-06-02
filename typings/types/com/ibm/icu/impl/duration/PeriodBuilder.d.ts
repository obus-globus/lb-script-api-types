import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PeriodBuilder extends Object{
    create(arg0: number): Period;
    createWithReferenceDate(arg0: number, arg1: number): Period;
    withLocale(arg0: string): PeriodBuilder;
    withTimeZone(arg0: TimeZone): PeriodBuilder;
}