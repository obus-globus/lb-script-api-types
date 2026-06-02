import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { TimeUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/TimeUnit.d.ts'
export interface PeriodBuilderFactory extends Object{
    getFixedUnitBuilder(unit: TimeUnit): PeriodBuilder;
    getMultiUnitBuilder(unitCount: number): PeriodBuilder;
    getOneOrTwoUnitBuilder(): PeriodBuilder;
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