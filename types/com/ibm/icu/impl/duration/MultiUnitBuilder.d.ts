import type { BasicPeriodBuilderFactory$Settings } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodBuilderFactory$Settings.d.ts'
import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodBuilderImpl } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilderImpl.d.ts'
export class MultiUnitBuilder extends PeriodBuilderImpl {
    static get(paramarg0: number, paramarg1: BasicPeriodBuilderFactory$Settings): MultiUnitBuilder;
    constructor(arg0: number, arg1: BasicPeriodBuilderFactory$Settings)
    // private nPeriods: number;
    handleCreate(arg0: number, arg1: number, arg2: boolean): Period;
    withSettings(arg0: BasicPeriodBuilderFactory$Settings): PeriodBuilder;
}