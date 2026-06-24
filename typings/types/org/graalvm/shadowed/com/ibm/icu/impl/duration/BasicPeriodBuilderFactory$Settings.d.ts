import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BasicPeriodBuilderFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/BasicPeriodBuilderFactory.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
import type { TimeUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/TimeUnit.d.ts'
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
    createLimited(duration: number, inPast: boolean): Period;
    effectiveMinUnit(): TimeUnit;
    effectiveSet(): number;
    setAllowMilliseconds(allowMillis: boolean): BasicPeriodBuilderFactory$Settings;
    setAllowZero(allow: boolean): BasicPeriodBuilderFactory$Settings;
    setInUse(): BasicPeriodBuilderFactory$Settings;
    setLocale(localeName: string): BasicPeriodBuilderFactory$Settings;
    setMaxLimit(maxLimit: number): BasicPeriodBuilderFactory$Settings;
    setMinLimit(minLimit: number): BasicPeriodBuilderFactory$Settings;
    setUnits(uset: number): BasicPeriodBuilderFactory$Settings;
    setWeeksAloneOnly(weeksAlone: boolean): BasicPeriodBuilderFactory$Settings;
}