import type { BasicPeriodBuilderFactory$Settings } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { TimeUnit } from '../../../../../com/ibm/icu/impl/duration/TimeUnit.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class PeriodBuilderImpl extends Object implements PeriodBuilder {
    constructor(arg0: BasicPeriodBuilderFactory$Settings)
    // private settings: BasicPeriodBuilderFactory$Settings;
    approximateDurationOf(arg0: TimeUnit): number;
    create(arg0: number): Period;
    createWithReferenceDate(arg0: number, arg1: number): Period;
    handleCreate(arg0: number, arg1: number, arg2: boolean): Period;
    withLocale(arg0: string): PeriodBuilder;
    withSettings(arg0: BasicPeriodBuilderFactory$Settings): PeriodBuilder;
    withTimeZone(arg0: TimeZone): PeriodBuilder;
}