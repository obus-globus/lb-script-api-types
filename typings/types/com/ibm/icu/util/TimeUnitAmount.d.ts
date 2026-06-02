import type { Measure } from '../../../../com/ibm/icu/util/Measure.d.ts'
import type { TimeUnit } from '../../../../com/ibm/icu/util/TimeUnit.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class TimeUnitAmount extends Measure {
    constructor(arg0: number, arg1: TimeUnit)
    constructor(arg0: Number, arg1: TimeUnit)
    getTimeUnit(): TimeUnit;
}