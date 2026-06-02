import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AsyncQueueFullPolicy } from '../../../../../../org/apache/logging/log4j/core/async/AsyncQueueFullPolicy.d.ts'
import type { DefaultAsyncQueueFullPolicy } from '../../../../../../org/apache/logging/log4j/core/async/DefaultAsyncQueueFullPolicy.d.ts'
import type { EventRoute } from '../../../../../../org/apache/logging/log4j/core/async/EventRoute.d.ts'
export class DiscardingAsyncQueueFullPolicy extends DefaultAsyncQueueFullPolicy {
    static getDiscardCount(paramrouter: AsyncQueueFullPolicy): number;
    constructor(thresholdLevel: Level)
    // private discardCount: AtomicLong;
    readonly thresholdLevel: Level;
    getRoute(backgroundThreadId: number, level: Level): EventRoute;
    getThresholdLevel(): Level;
}