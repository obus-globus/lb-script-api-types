import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Clock } from '../../../../../../org/apache/logging/log4j/core/util/Clock.d.ts'
export class CachedClock extends Object implements Clock {
    static instance(): CachedClock;
    private constructor()
    // private count: number;
    // private millis: number;
    currentTimeMillis(): number;
}