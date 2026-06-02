import type { BasicPeriodBuilderFactory$Settings } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodBuilderImpl } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilderImpl.d.ts'
import type { TimeUnit } from '../../../../../com/ibm/icu/impl/duration/TimeUnit.d.ts'
export class FixedUnitBuilder extends PeriodBuilderImpl {
    static get(paramarg0: TimeUnit, paramarg1: BasicPeriodBuilderFactory$Settings): FixedUnitBuilder;
    constructor(arg0: TimeUnit, arg1: BasicPeriodBuilderFactory$Settings)
    // private unit: TimeUnit;
    handleCreate(arg0: number, arg1: number, arg2: boolean): Period;
    withSettings(arg0: BasicPeriodBuilderFactory$Settings): PeriodBuilder;
}