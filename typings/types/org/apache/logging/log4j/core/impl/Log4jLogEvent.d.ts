import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ObjectInputStream } from '../../../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Property } from '../../../../../../org/apache/logging/log4j/core/config/Property.d.ts'
import type { Log4jLogEvent$Builder } from '../../../../../../org/apache/logging/log4j/core/impl/Log4jLogEvent$Builder.d.ts'
import type { ThrowableProxy } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableProxy.d.ts'
import type { Instant } from '../../../../../../org/apache/logging/log4j/core/time/Instant.d.ts'
import type { MutableInstant } from '../../../../../../org/apache/logging/log4j/core/time/MutableInstant.d.ts'
import type { NanoClock } from '../../../../../../org/apache/logging/log4j/core/util/NanoClock.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ReadOnlyStringMap } from '../../../../../../org/apache/logging/log4j/util/ReadOnlyStringMap.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class Log4jLogEvent extends Object implements LogEvent {
    static canDeserialize(paramevent: Serializable): boolean;
    static createEvent(paramloggerName: string, parammarker: Marker, paramloggerFQCN: string, paramlevel: Level, parammessage: Message, paramthrown: Throwable, paramignoredThrownProxy: ThrowableProxy, parammdc: JavaMap<string, string>, paramndc: (Object | null)[], paramthreadName: string, paramlocation: StackTraceElement, paramtimestamp: number): Log4jLogEvent;
    static createMemento(paramlogEvent: LogEvent): LogEvent;
    static createMemento(paramevent: LogEvent, paramincludeLocation: boolean): Log4jLogEvent;
    static deserialize(paramevent: Serializable): Log4jLogEvent;
    static getNanoClock(): NanoClock;
    static newBuilder(): Log4jLogEvent$Builder;
    static serialize(paramevent: LogEvent, paramincludeLocation: boolean): Serializable;
    static serialize(paramevent: Log4jLogEvent, paramincludeLocation: boolean): Serializable;
    static setNanoClock(paramnanoClock: NanoClock): void;
    constructor()
    constructor(timestamp: number)
    constructor(loggerName: string, marker: Marker, loggerFQCN: string, source: StackTraceElement, level: Level, message: Message, properties: Property[], t: Throwable)
    constructor(loggerName: string, marker: Marker, loggerFQCN: string, level: Level, message: Message, t: Throwable)
    constructor(loggerName: string, marker: Marker, loggerFQCN: string, level: Level, message: Message, t: Throwable, mdc: JavaMap<string, string>, ndc: (Object | null)[], threadName: string, location: StackTraceElement, timestampMillis: number)
    constructor(loggerName: string, marker: Marker, loggerFQCN: string, level: Level, message: Message, properties: Property[], t: Throwable)
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
    readonly nanoTime: number;
    readonly source: StackTraceElement;
    readonly threadId: number;
    readonly threadName: string;
    readonly threadPriority: number;
    readonly thrown: Throwable;
    readonly thrownProxy: ThrowableProxy;
    asBuilder(): Log4jLogEvent$Builder;
    equals(o: Object | null): boolean;
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
    hashCode(): number;
    isEndOfBatch(): boolean;
    isIncludeLocation(): boolean;
    makeMessageImmutable(): void;
    // private populateLazilyInitializedFields(): void;
    // private readObject(stream: ObjectInputStream): void;
    setEndOfBatch(endOfBatch: boolean): void;
    setIncludeLocation(includeLocation: boolean): void;
    toImmutable(): Log4jLogEvent;
    toString(): string;
    writeReplace(): Object;
}