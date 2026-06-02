import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableInstant } from '../../../../../../org/apache/logging/log4j/core/time/MutableInstant.d.ts'
import type { PreciseClock } from '../../../../../../org/apache/logging/log4j/core/time/PreciseClock.d.ts'
import type { Clock } from '../../../../../../org/apache/logging/log4j/core/util/Clock.d.ts'
export class SystemClock extends Object implements PreciseClock, Clock {
    constructor()
    currentTimeMillis(): number;
    init(mutableInstant: MutableInstant): void;
}