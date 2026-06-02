import type { BasicPeriodBuilderFactory$Settings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodBuilderImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilderImpl.d.ts'
import type { TimeUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/TimeUnit.d.ts'
export class FixedUnitBuilder extends PeriodBuilderImpl {
    static get(paramunit: TimeUnit, paramsettingsToUse: BasicPeriodBuilderFactory$Settings): FixedUnitBuilder;
    constructor(unit: TimeUnit, settings: BasicPeriodBuilderFactory$Settings)
    // private unit: TimeUnit;
    handleCreate(duration: number, referenceDate: number, inPast: boolean): Period;
    withSettings(settingsToUse: BasicPeriodBuilderFactory$Settings): PeriodBuilder;
}