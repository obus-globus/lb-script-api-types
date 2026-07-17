import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { ThrowableProxy } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableProxy.d.ts'
import type { Instant } from '../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
export class AbstractJacksonLayout$ReadOnlyLogEventWrapper extends Object implements LogEvent {
    constructor(event: LogEvent)
    // private event: LogEvent;
    getContextData(): ReadOnlyStringMap;
    getContextMap(): JavaMap<string, string>;
    getContextStack(): (Object | null)[];
    getInstant(): Instant;
    getLevel(): Level;
    getLoggerFqcn(): string;
    getLoggerName(): string;
    getMarker(): Marker;
    getMessage(): Message;
    getNanoTime(): number;
    getSource(): StackTraceElement;
    getThreadId(): number;
    getThreadName(): string;
    getThreadPriority(): number;
    getThrown(): Throwable;
    getThrownProxy(): ThrowableProxy;
    getTimeMillis(): number;
    isEndOfBatch(): boolean;
    isIncludeLocation(): boolean;
    setEndOfBatch(endOfBatch: boolean): void;
    setIncludeLocation(locationRequired: boolean): void;
    toImmutable(): LogEvent;
}