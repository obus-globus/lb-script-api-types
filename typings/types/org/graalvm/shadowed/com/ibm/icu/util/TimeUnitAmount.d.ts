import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { Measure } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Measure.d.ts'
import type { TimeUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeUnit.d.ts'
export class TimeUnitAmount extends Measure {
    constructor(number: number, unit: TimeUnit)
    constructor(number: Number, unit: TimeUnit)
    getTimeUnit(): TimeUnit;
}