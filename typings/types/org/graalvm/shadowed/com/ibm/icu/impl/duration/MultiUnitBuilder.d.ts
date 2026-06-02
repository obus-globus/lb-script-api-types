import type { BasicPeriodBuilderFactory$Settings } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodBuilderImpl } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilderImpl.d.ts'
export class MultiUnitBuilder extends PeriodBuilderImpl {
    static get(paramnPeriods: number, paramsettings: BasicPeriodBuilderFactory$Settings): MultiUnitBuilder;
    constructor(nPeriods: number, settings: BasicPeriodBuilderFactory$Settings)
    // private nPeriods: number;
    handleCreate(duration: number, referenceDate: number, inPast: boolean): Period;
    withSettings(settingsToUse: BasicPeriodBuilderFactory$Settings): PeriodBuilder;
}