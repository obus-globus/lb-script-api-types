import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AsyncLoggerConfig } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfig.d.ts'
import type { EventRoute } from '../../../../../../org/apache/logging/log4j/core/async/EventRoute.d.ts'
import type { LogEventFactory } from '../../../../../../org/apache/logging/log4j/core/impl/LogEventFactory.d.ts'
import type { RingBufferAdmin } from '../../../../../../org/apache/logging/log4j/core/jmx/RingBufferAdmin.d.ts'
export interface AsyncLoggerConfigDelegate extends Object{
    createRingBufferAdmin(contextName: string, loggerConfigName: string): RingBufferAdmin;
    enqueueEvent(event: LogEvent, asyncLoggerConfig: AsyncLoggerConfig): void;
    getEventRoute(level: Level): EventRoute;
    setLogEventFactory(logEventFactory: LogEventFactory): void;
    tryEnqueue(event: LogEvent, asyncLoggerConfig: AsyncLoggerConfig): boolean;
}