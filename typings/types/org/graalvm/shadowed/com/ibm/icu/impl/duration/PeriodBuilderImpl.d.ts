import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BasicPeriodBuilderFactory$Settings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { TimeUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/TimeUnit.d.ts'
export abstract class PeriodBuilderImpl extends Object implements PeriodBuilder {
    constructor(settings: BasicPeriodBuilderFactory$Settings)
    // private settings: BasicPeriodBuilderFactory$Settings;
    approximateDurationOf(unit: TimeUnit): number;
    create(duration: number): Period;
    createWithReferenceDate(duration: number, referenceDate: number): Period;
    handleCreate(duration: number, referenceDate: number, inPast: boolean): Period;
    withLocale(localeName: string): PeriodBuilder;
    withSettings(settingsToUse: BasicPeriodBuilderFactory$Settings): PeriodBuilder;
    withTimeZone(timeZone: TimeZone): PeriodBuilder;
}