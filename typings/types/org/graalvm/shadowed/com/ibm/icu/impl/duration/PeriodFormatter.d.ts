import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
export interface PeriodFormatter extends Object{
    format(period: Period): string;
    withLocale(localeName: string): PeriodFormatter;
}