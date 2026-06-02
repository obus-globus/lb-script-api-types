import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Clock } from '../../../../../../org/apache/logging/log4j/core/util/Clock.d.ts'
export class SystemMillisClock extends Object implements Clock {
    constructor()
    currentTimeMillis(): number;
}