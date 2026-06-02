import type { ObjectInputStream } from '../../../../../../java/io/ObjectInputStream.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Log4jLogEvent } from '../../../../../../org/apache/logging/log4j/core/impl/Log4jLogEvent.d.ts'
import type { Log4jLogEvent$Builder } from '../../../../../../org/apache/logging/log4j/core/impl/Log4jLogEvent$Builder.d.ts'
import type { ThrowableProxy } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableProxy.d.ts'
import type { Instant } from '../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { MutableInstant } from '../../../../../../org/apache/logging/log4j/core/time/MutableInstant.d.ts'
import type { Clock } from '../../../../../../org/apache/logging/log4j/core/util/Clock.d.ts'
import type { NanoClock } from '../../../../../../org/apache/logging/log4j/core/util/NanoClock.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ParameterConsumer } from '../../../../../../org/apache/logging/log4j/message/ParameterConsumer.d.ts'
import type { ParameterVisitable } from '../../../../../../org/apache/logging/log4j/message/ParameterVisitable.d.ts'
import type { ReusableMessage } from '../../../../../../org/apache/logging/log4j/message/ReusableMessage.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class MutableLogEvent extends Object implements LogEvent, ParameterVisitable, ReusableMessage {
    constructor()
    constructor(msgText: StringBuilder, replacementParameters: Object[])
    readonly contextData: StringMap;
    readonly contextStack: (Object | null)[];
    readonly endOfBatch: boolean;
    readonly includeLocation: boolean;
    readonly instant: MutableInstant;
    readonly level: Level;
    readonly loggerFqcn: string;
    readonly loggerName: string;
    readonly marker: Marker;
    readonly message: Message;
    // private messageFormat: string;
    // private messageText: StringBuilder;
    readonly nanoTime: number;
    readonly parameterCount: number;
    readonly parameters: Object[];
    // private reserved: boolean;
    source: StackTraceElement;
    readonly threadId: number;
    readonly threadName: string;
    readonly threadPriority: number;
    readonly thrown: Throwable;
    clear(): void;
    createMemento(): Log4jLogEvent;
    forEachParameter<S extends Object | number | string | boolean>(action: ParameterConsumer<S>, state: S): void;
    formatTo(buffer: StringBuilder): void;
    getContextData(): ReadOnlyStringMap;
    getContextMap(): { [key: string]: string };
    getContextStack(): (Object | null)[];
    getFormat(): string;
    getFormattedMessage(): string;
    getInstant(): Instant;
    getLevel(): Level;
    getLoggerFqcn(): string;
    getLoggerName(): string;
    getMarker(): Marker;
    getMessage(): Message;
    // private getMessageTextForWriting(): StringBuilder;
    getNanoTime(): number;
    getParameterCount(): number;
    getParameters(): Object[];
    getSource(): StackTraceElement;
    getThreadId(): number;
    getThreadName(): string;
    getThreadPriority(): number;
    getThrowable(): Throwable;
    getThrown(): Throwable;
    getThrownProxy(): ThrowableProxy;
    getTimeMillis(): number;
    initFrom(event: LogEvent): void;
    initTime(clock: Clock, nanoClock: NanoClock): void;
    initializeBuilder(builder: Log4jLogEvent$Builder): void;
    isEndOfBatch(): boolean;
    isIncludeLocation(): boolean;
    memento(): Message;
    // private readObject(stream: ObjectInputStream): void;
    setContextData(mutableContextData: StringMap): void;
    setContextStack(contextStack: (Object | null)[]): void;
    setEndOfBatch(endOfBatch: boolean): void;
    setIncludeLocation(includeLocation: boolean): void;
    setLevel(level: Level): void;
    setLoggerFqcn(loggerFqcn: string): void;
    setLoggerName(loggerName: string): void;
    setMarker(marker: Marker): void;
    setMessage(msg: Message): void;
    setNanoTime(nanoTime: number): void;
    setSource(source: StackTraceElement): void;
    setThreadId(threadId: number): void;
    setThreadName(threadName: string): void;
    setThreadPriority(threadPriority: number): void;
    setThrown(thrown: Throwable): void;
    setTimeMillis(timeMillis: number): void;
    swapParameters(emptyReplacement: Object[]): Object[];
    toImmutable(): Log4jLogEvent;
    writeReplace(): Object;
}