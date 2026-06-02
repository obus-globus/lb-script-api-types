import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Appender } from '../../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { RoutingAppender$RouteAppenderControl } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/RoutingAppender$RouteAppenderControl.d.ts'
export class RoutingAppender$CreatedRouteAppenderControl extends RoutingAppender$RouteAppenderControl {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor(appender: Appender)
    // private depth: AtomicInteger;
    // private pendingDeletion: boolean;
    checkout(): void;
    release(): void;
    tryStopAppender(): void;
}