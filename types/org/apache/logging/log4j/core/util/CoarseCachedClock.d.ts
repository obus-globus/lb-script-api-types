import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Clock } from '../../../../../../org/apache/logging/log4j/core/util/Clock.d.ts'
export class CoarseCachedClock extends Object implements Clock {
    static instance(): CoarseCachedClock;
    private constructor()
    // private millis: number;
    // private updater: Thread;
    currentTimeMillis(): number;
}