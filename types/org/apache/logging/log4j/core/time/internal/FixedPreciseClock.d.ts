import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MutableInstant } from '../../../../../../../org/apache/logging/log4j/core/time/MutableInstant.d.ts'
import type { PreciseClock } from '../../../../../../../org/apache/logging/log4j/core/time/PreciseClock.d.ts'
export class FixedPreciseClock extends Object implements PreciseClock {
    constructor()
    constructor(currentTimeMillis: number)
    constructor(currentTimeMillis: number, nanosOfMillisecond: number)
    // private currentTimeMillis: number;
    // private nanosOfMillisecond: number;
    currentTimeMillis(): number;
    init(instant: MutableInstant): void;
}