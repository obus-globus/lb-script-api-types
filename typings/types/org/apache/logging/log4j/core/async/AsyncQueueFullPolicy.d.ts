import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { EventRoute } from '../../../../../../org/apache/logging/log4j/core/async/EventRoute.d.ts'
export interface AsyncQueueFullPolicy extends Object{
    getRoute(backgroundThreadId: number, level: Level): EventRoute;
}