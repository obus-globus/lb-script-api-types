import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BasicPeriodBuilderFactory$Settings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodBuilderFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilderFactory.d.ts'
import type { TimeUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/TimeUnit.d.ts'
import type { PeriodFormatterDataService } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
export class BasicPeriodBuilderFactory extends Object implements PeriodBuilderFactory {
    constructor(ds: PeriodFormatterDataService)
    // private ds: PeriodFormatterDataService;
    // private settings: BasicPeriodBuilderFactory$Settings;
    getFixedUnitBuilder(unit: TimeUnit): PeriodBuilder;
    getMultiUnitBuilder(periodCount: number): PeriodBuilder;
    getOneOrTwoUnitBuilder(): PeriodBuilder;
    // private getSettings(): BasicPeriodBuilderFactory$Settings;
    getSingleUnitBuilder(): PeriodBuilder;
    setAllowMilliseconds(allow: boolean): PeriodBuilderFactory;
    setAllowZero(allow: boolean): PeriodBuilderFactory;
    setAvailableUnitRange(minUnit: TimeUnit, maxUnit: TimeUnit): PeriodBuilderFactory;
    setLocale(localeName: string): PeriodBuilderFactory;
    setMaxLimit(maxLimit: number): PeriodBuilderFactory;
    setMinLimit(minLimit: number): PeriodBuilderFactory;
    setTimeZone(timeZone: TimeZone): PeriodBuilderFactory;
    setUnitIsAvailable(unit: TimeUnit, available: boolean): PeriodBuilderFactory;
    setWeeksAloneOnly(aloneOnly: boolean): PeriodBuilderFactory;
}