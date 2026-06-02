import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Appender } from '../../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { AppenderControl } from '../../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
export abstract class RoutingAppender$RouteAppenderControl extends AppenderControl {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor(appender: Appender)
    checkout(): void;
    release(): void;
}