import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Appender } from '../../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { RoutingAppender$RouteAppenderControl } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/RoutingAppender$RouteAppenderControl.d.ts'
export class RoutingAppender$ReferencedRouteAppenderControl extends RoutingAppender$RouteAppenderControl {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor(appender: Appender)
    checkout(): void;
    release(): void;
}