import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Condition } from '../../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LocationAwareReliabilityStrategy } from '../../../../../../org/apache/logging/log4j/core/config/LocationAwareReliabilityStrategy.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { ReliabilityStrategy } from '../../../../../../org/apache/logging/log4j/core/config/ReliabilityStrategy.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { Supplier } from '../../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export class AwaitCompletionReliabilityStrategy extends Object implements LocationAwareReliabilityStrategy, ReliabilityStrategy {
    constructor(loggerConfig: LoggerConfig)
    // private counter: AtomicInteger;
    // private loggerConfig: LoggerConfig;
    // private noLogEvents: Condition;
    // private shutdown: AtomicBoolean;
    // private shutdownLock: Lock;
    afterLogEvent(): void;
    // private beforeLogEvent(): boolean;
    beforeStopAppenders(): void;
    beforeStopConfiguration(configuration: Configuration): void;
    getActiveLoggerConfig(next: () => LoggerConfig): LoggerConfig;
    log(reconfigured: () => LoggerConfig, loggerName: string, fqcn: string, location: StackTraceElement, marker: Marker, level: Level, data: Message, t: Throwable): void;
    log(reconfigured: () => LoggerConfig, loggerName: string, fqcn: string, marker: Marker, level: Level, data: Message, t: Throwable): void;
    log(reconfigured: () => LoggerConfig, event: LogEvent): void;
    // private signalCompletionIfShutdown(): void;
    // private waitForCompletion(): void;
}