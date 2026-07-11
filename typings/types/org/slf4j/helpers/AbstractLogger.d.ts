import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { LoggingEventBuilder } from '../../../org/slf4j/spi/LoggingEventBuilder.d.ts'
export abstract class AbstractLogger extends Object implements Serializable, Logger {
    static ROOT_LOGGER_NAME: string;
    constructor()
    name: string;
    atDebug(): LoggingEventBuilder;
    atError(): LoggingEventBuilder;
    atInfo(): LoggingEventBuilder;
    atLevel(arg0: Level): LoggingEventBuilder;
    atTrace(): LoggingEventBuilder;
    atWarn(): LoggingEventBuilder;
    debug(arg0: string): void;
    debug(arg0: string, arg1: Object): void;
    debug(arg0: string, arg1: Object, arg2: Object): void;
    debug(arg0: string, ...arg1: Object[]): void;
    debug(arg0: string, arg1: Throwable): void;
    debug(arg0: Marker, arg1: string): void;
    debug(arg0: Marker, arg1: string, arg2: Object): void;
    debug(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    debug(arg0: Marker, arg1: string, ...arg2: Object[]): void;
    debug(arg0: Marker, arg1: string, arg2: Throwable): void;
    error(arg0: string): void;
    error(arg0: string, arg1: Object): void;
    error(arg0: string, arg1: Object, arg2: Object): void;
    error(arg0: string, ...arg1: Object[]): void;
    error(arg0: string, arg1: Throwable): void;
    error(arg0: Marker, arg1: string): void;
    error(arg0: Marker, arg1: string, arg2: Object): void;
    error(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    error(arg0: Marker, arg1: string, ...arg2: Object[]): void;
    error(arg0: Marker, arg1: string, arg2: Throwable): void;
    getFullyQualifiedCallerName(): string;
    getName(): string;
    // private handle2ArgsCall(arg0: Level, arg1: Marker, arg2: string, arg3: Object, arg4: Object): void;
    // private handleArgArrayCall(arg0: Level, arg1: Marker, arg2: string, arg3: Object[]): void;
    handleNormalizedLoggingCall(arg0: Level, arg1: Marker, arg2: string, arg3: Object[], arg4: Throwable): void;
    // private handle_0ArgsCall(arg0: Level, arg1: Marker, arg2: string, arg3: Throwable): void;
    // private handle_1ArgsCall(arg0: Level, arg1: Marker, arg2: string, arg3: Object): void;
    info(arg0: string): void;
    info(arg0: string, arg1: Object): void;
    info(arg0: string, arg1: Object, arg2: Object): void;
    info(arg0: string, ...arg1: Object[]): void;
    info(arg0: string, arg1: Throwable): void;
    info(arg0: Marker, arg1: string): void;
    info(arg0: Marker, arg1: string, arg2: Object): void;
    info(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    info(arg0: Marker, arg1: string, ...arg2: Object[]): void;
    info(arg0: Marker, arg1: string, arg2: Throwable): void;
    isDebugEnabled(): boolean;
    isDebugEnabled(arg0: Marker): boolean;
    isEnabledForLevel(arg0: Level): boolean;
    isErrorEnabled(): boolean;
    isErrorEnabled(arg0: Marker): boolean;
    isInfoEnabled(): boolean;
    isInfoEnabled(arg0: Marker): boolean;
    isTraceEnabled(): boolean;
    isTraceEnabled(arg0: Marker): boolean;
    isWarnEnabled(): boolean;
    isWarnEnabled(arg0: Marker): boolean;
    makeLoggingEventBuilder(arg0: Level): LoggingEventBuilder;
    readResolve(): Object;
    trace(arg0: string): void;
    trace(arg0: string, arg1: Object): void;
    trace(arg0: string, arg1: Object, arg2: Object): void;
    trace(arg0: string, ...arg1: Object[]): void;
    trace(arg0: string, arg1: Throwable): void;
    trace(arg0: Marker, arg1: string): void;
    trace(arg0: Marker, arg1: string, arg2: Object): void;
    trace(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    trace(arg0: Marker, arg1: string, ...arg2: Object[]): void;
    trace(arg0: Marker, arg1: string, arg2: Throwable): void;
    warn(arg0: string): void;
    warn(arg0: string, arg1: Object): void;
    warn(arg0: string, arg1: Object, arg2: Object): void;
    warn(arg0: string, ...arg1: Object[]): void;
    warn(arg0: string, arg1: Throwable): void;
    warn(arg0: Marker, arg1: string): void;
    warn(arg0: Marker, arg1: string, arg2: Object): void;
    warn(arg0: Marker, arg1: string, arg2: Object, arg3: Object): void;
    warn(arg0: Marker, arg1: string, ...arg2: Object[]): void;
    warn(arg0: Marker, arg1: string, arg2: Throwable): void;
}