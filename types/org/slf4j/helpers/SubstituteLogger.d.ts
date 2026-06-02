import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { EventRecordingLogger } from '../../../org/slf4j/event/EventRecordingLogger.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { LoggingEvent } from '../../../org/slf4j/event/LoggingEvent.d.ts'
import type { SubstituteLoggingEvent } from '../../../org/slf4j/event/SubstituteLoggingEvent.d.ts'
import type { LoggingEventBuilder } from '../../../org/slf4j/spi/LoggingEventBuilder.d.ts'
export class SubstituteLogger extends Object implements Logger {
    static ROOT_LOGGER_NAME: string;
    constructor(arg0: string, arg1: SubstituteLoggingEvent[], arg2: boolean)
    // private _delegate: Logger;
    createdPostInitialization: boolean;
    readonly delegateEventAware: boolean;
    // private eventQueue: SubstituteLoggingEvent[];
    // private eventRecordingLogger: EventRecordingLogger;
    // private logMethodCache: Method;
    readonly name: string;
    atDebug(): LoggingEventBuilder;
    atDebug(): LoggingEventBuilder;
    atError(): LoggingEventBuilder;
    atError(): LoggingEventBuilder;
    atInfo(): LoggingEventBuilder;
    atInfo(): LoggingEventBuilder;
    atLevel(arg0: Level): LoggingEventBuilder;
    atLevel(arg0: Level): LoggingEventBuilder;
    atTrace(): LoggingEventBuilder;
    atTrace(): LoggingEventBuilder;
    atWarn(): LoggingEventBuilder;
    atWarn(): LoggingEventBuilder;
    debug(arg0: string): void;
    debug(arg0: string, arg1: Object): void;
    debug(arg0: string, arg1: Object, arg2: Object): void;
    debug(arg0: string, arg1: Object[]): void;
    debug(arg0: string, arg1: Throwable): void;
    debug(arg0: Marker, arg1: string): void;
    debug(arg0: Marker, arg1: string, arg2: Object): void;
    debug(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    debug(arg0: Marker, arg1: string, arg2: Object[]): void;
    debug(arg0: Marker, arg1: string, arg2: Throwable): void;
    delegate(): Logger;
    equals(arg0: Object | null): boolean;
    error(arg0: string): void;
    error(arg0: string, arg1: Object): void;
    error(arg0: string, arg1: Object, arg2: Object): void;
    error(arg0: string, arg1: Object[]): void;
    error(arg0: string, arg1: Throwable): void;
    error(arg0: Marker, arg1: string): void;
    error(arg0: Marker, arg1: string, arg2: Object): void;
    error(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    error(arg0: Marker, arg1: string, arg2: Object[]): void;
    error(arg0: Marker, arg1: string, arg2: Throwable): void;
    // private getEventRecordingLogger(): Logger;
    getName(): string;
    hashCode(): number;
    info(arg0: string): void;
    info(arg0: string, arg1: Object): void;
    info(arg0: string, arg1: Object, arg2: Object): void;
    info(arg0: string, arg1: Object[]): void;
    info(arg0: string, arg1: Throwable): void;
    info(arg0: Marker, arg1: string): void;
    info(arg0: Marker, arg1: string, arg2: Object): void;
    info(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    info(arg0: Marker, arg1: string, arg2: Object[]): void;
    info(arg0: Marker, arg1: string, arg2: Throwable): void;
    isDebugEnabled(): boolean;
    isDebugEnabled(arg0: Marker): boolean;
    isDelegateEventAware(): boolean;
    isDelegateNOP(): boolean;
    isDelegateNull(): boolean;
    isEnabledForLevel(arg0: Level): boolean;
    isEnabledForLevel(arg0: Level): boolean;
    isErrorEnabled(): boolean;
    isErrorEnabled(arg0: Marker): boolean;
    isInfoEnabled(): boolean;
    isInfoEnabled(arg0: Marker): boolean;
    isTraceEnabled(): boolean;
    isTraceEnabled(arg0: Marker): boolean;
    isWarnEnabled(): boolean;
    isWarnEnabled(arg0: Marker): boolean;
    log(arg0: LoggingEvent): void;
    makeLoggingEventBuilder(arg0: Level): LoggingEventBuilder;
    makeLoggingEventBuilder(arg0: Level): LoggingEventBuilder;
    setDelegate(arg0: Logger): void;
    trace(arg0: string): void;
    trace(arg0: string, arg1: Object): void;
    trace(arg0: string, arg1: Object, arg2: Object): void;
    trace(arg0: string, arg1: Object[]): void;
    trace(arg0: string, arg1: Throwable): void;
    trace(arg0: Marker, arg1: string): void;
    trace(arg0: Marker, arg1: string, arg2: Object): void;
    trace(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    trace(arg0: Marker, arg1: string, arg2: Object[]): void;
    trace(arg0: Marker, arg1: string, arg2: Throwable): void;
    warn(arg0: string): void;
    warn(arg0: string, arg1: Object): void;
    warn(arg0: string, arg1: Object, arg2: Object): void;
    warn(arg0: string, arg1: Object[]): void;
    warn(arg0: string, arg1: Throwable): void;
    warn(arg0: Marker, arg1: string): void;
    warn(arg0: Marker, arg1: string, arg2: Object): void;
    warn(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    warn(arg0: Marker, arg1: string, arg2: Object[]): void;
    warn(arg0: Marker, arg1: string, arg2: Throwable): void;
}