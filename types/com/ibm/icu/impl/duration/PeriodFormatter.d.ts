import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PeriodFormatter extends Object{
    format(arg0: Period): string;
    withLocale(arg0: string): PeriodFormatter;
}