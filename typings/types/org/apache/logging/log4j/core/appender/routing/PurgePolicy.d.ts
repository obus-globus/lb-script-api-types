import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { RoutingAppender } from '../../../../../../../org/apache/logging/log4j/core/appender/routing/RoutingAppender.d.ts'
export interface PurgePolicy extends Object{
    initialize(routingAppender: RoutingAppender): void;
    purge(): void;
    update(key: string, event: LogEvent): void;
}