import type { BasicPeriodBuilderFactory } from '../../../../../com/ibm/icu/impl/duration/BasicPeriodBuilderFactory.d.ts'
import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { TimeUnit } from '../../../../../com/ibm/icu/impl/duration/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicPeriodBuilderFactory$Settings extends Object {
    constructor(null_: BasicPeriodBuilderFactory)
    // private allowMillis: boolean;
    // private allowZero: boolean;
    // private inUse: boolean;
    // private maxLimit: number;
    // private maxUnit: TimeUnit;
    // private minLimit: number;
    // private minUnit: TimeUnit;
    // private uset: number;
    // private weeksAloneOnly: boolean;
    copy(): BasicPeriodBuilderFactory$Settings;
    createLimited(arg0: number, arg1: boolean): Period;
    effectiveMinUnit(): TimeUnit;
    effectiveSet(): number;
    setAllowMilliseconds(arg0: boolean): BasicPeriodBuilderFactory$Settings;
    setAllowZero(arg0: boolean): BasicPeriodBuilderFactory$Settings;
    setInUse(): BasicPeriodBuilderFactory$Settings;
    setLocale(arg0: string): BasicPeriodBuilderFactory$Settings;
    setMaxLimit(arg0: number): BasicPeriodBuilderFactory$Settings;
    setMinLimit(arg0: number): BasicPeriodBuilderFactory$Settings;
    setUnits(arg0: number): BasicPeriodBuilderFactory$Settings;
    setWeeksAloneOnly(arg0: boolean): BasicPeriodBuilderFactory$Settings;
}