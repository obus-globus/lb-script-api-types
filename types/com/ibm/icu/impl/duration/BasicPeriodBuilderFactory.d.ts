import type { BasicPeriodBuilderFactory$Settings } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { PeriodBuilder } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodBuilderFactory } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilderFactory.d.ts'
import type { TimeUnit } from '../../../../../com/ibm/icu/impl/duration/TimeUnit.d.ts'
import type { PeriodFormatterDataService } from '../../../../../com/ibm/icu/impl/duration/impl/PeriodFormatterDataService.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicPeriodBuilderFactory extends Object implements PeriodBuilderFactory {
    constructor(arg0: PeriodFormatterDataService)
    // private ds: PeriodFormatterDataService;
    // private settings: BasicPeriodBuilderFactory$Settings;
    getFixedUnitBuilder(arg0: TimeUnit): PeriodBuilder;
    getMultiUnitBuilder(arg0: number): PeriodBuilder;
    getOneOrTwoUnitBuilder(): PeriodBuilder;
    // private getSettings(): BasicPeriodBuilderFactory$Settings;
    getSingleUnitBuilder(): PeriodBuilder;
    setAllowMilliseconds(arg0: boolean): PeriodBuilderFactory;
    setAllowZero(arg0: boolean): PeriodBuilderFactory;
    setAvailableUnitRange(arg0: TimeUnit, arg1: TimeUnit): PeriodBuilderFactory;
    setLocale(arg0: string): PeriodBuilderFactory;
    setMaxLimit(arg0: number): PeriodBuilderFactory;
    setMinLimit(arg0: number): PeriodBuilderFactory;
    setTimeZone(arg0: TimeZone): PeriodBuilderFactory;
    setUnitIsAvailable(arg0: TimeUnit, arg1: boolean): PeriodBuilderFactory;
    setWeeksAloneOnly(arg0: boolean): PeriodBuilderFactory;
}