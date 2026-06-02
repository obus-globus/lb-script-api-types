import type { BasicPeriodBuilderFactory$Settings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodBuilderImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilderImpl.d.ts'
export class SingleUnitBuilder extends PeriodBuilderImpl {
    static get(paramsettings: BasicPeriodBuilderFactory$Settings): SingleUnitBuilder;
    constructor(settings: BasicPeriodBuilderFactory$Settings)
    handleCreate(duration: number, referenceDate: number, inPast: boolean): Period;
    withSettings(settingsToUse: BasicPeriodBuilderFactory$Settings): PeriodBuilder;
}