import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Log4jLogEvent } from '../../../../../../org/apache/logging/log4j/core/impl/Log4jLogEvent.d.ts'
import type { ThrowableProxy } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableProxy.d.ts'
import type { Instant } from '../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { MutableInstant } from '../../../../../../org/apache/logging/log4j/core/time/MutableInstant.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class Log4jLogEvent$Builder extends Object implements Builder<LogEvent> {
    constructor()
    constructor(other: LogEvent)
    // private contextData: StringMap;
    // private contextStack: (Object | null)[];
    // private endOfBatch: boolean;
    // private includeLocation: boolean;
    // private instant: MutableInstant;
    // private level: Level;
    // private loggerFqcn: string;
    // private loggerName: string;
    // private marker: Marker;
    // private message: Message;
    // private nanoTime: number;
    // private source: StackTraceElement;
    // private threadId: number;
    // private threadName: string;
    // private threadPriority: number;
    // private thrown: Throwable;
    build(): Log4jLogEvent;
    getErrorPrefix(): string;
    // private initTimeFields(): void;
    isValid(): boolean;
    setContextData(contextData: StringMap): Log4jLogEvent$Builder;
    setContextMap(contextMap: { [key: string]: string }): Log4jLogEvent$Builder;
    setContextStack(contextStack: (Object | null)[]): Log4jLogEvent$Builder;
    setEndOfBatch(endOfBatch: boolean): Log4jLogEvent$Builder;
    setIncludeLocation(includeLocation: boolean): Log4jLogEvent$Builder;
    setInstant(instant: Instant): Log4jLogEvent$Builder;
    setLevel(level: Level): Log4jLogEvent$Builder;
    setLoggerFqcn(loggerFqcn: string): Log4jLogEvent$Builder;
    setLoggerName(loggerName: string): Log4jLogEvent$Builder;
    setMarker(marker: Marker): Log4jLogEvent$Builder;
    setMessage(message: Message): Log4jLogEvent$Builder;
    setNanoTime(nanoTime: number): Log4jLogEvent$Builder;
    setSource(source: StackTraceElement): Log4jLogEvent$Builder;
    setThreadId(threadId: number): Log4jLogEvent$Builder;
    setThreadName(threadName: string): Log4jLogEvent$Builder;
    setThreadPriority(threadPriority: number): Log4jLogEvent$Builder;
    setThrown(thrown: Throwable): Log4jLogEvent$Builder;
    setThrownProxy(thrownProxy: ThrowableProxy): Log4jLogEvent$Builder;
    setTimeMillis(timeMillis: number): Log4jLogEvent$Builder;
}