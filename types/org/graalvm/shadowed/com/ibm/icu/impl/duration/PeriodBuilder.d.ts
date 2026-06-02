import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
export interface PeriodBuilder extends Object{
    create(duration: number): Period;
    createWithReferenceDate(duration: number, referenceDate: number): Period;
    withLocale(localeName: string): PeriodBuilder;
    withTimeZone(tz: TimeZone): PeriodBuilder;
}