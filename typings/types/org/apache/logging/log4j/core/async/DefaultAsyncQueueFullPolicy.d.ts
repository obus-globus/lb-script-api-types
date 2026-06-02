import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { AsyncQueueFullPolicy } from '../../../../../../org/apache/logging/log4j/core/async/AsyncQueueFullPolicy.d.ts'
import type { EventRoute } from '../../../../../../org/apache/logging/log4j/core/async/EventRoute.d.ts'
export class DefaultAsyncQueueFullPolicy extends Object implements AsyncQueueFullPolicy {
    constructor()
    getRoute(backgroundThreadId: number, level: Level): EventRoute;
}