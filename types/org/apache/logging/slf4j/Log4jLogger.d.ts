import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ExtendedLogger } from '../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { Log4jMarkerFactory } from '../../../../org/apache/logging/slf4j/Log4jMarkerFactory.d.ts'
import type { Marker } from '../../../../org/slf4j/Marker.d.ts'
import type { Level } from '../../../../org/slf4j/event/Level.d.ts'
import type { LocationAwareLogger } from '../../../../org/slf4j/spi/LocationAwareLogger.d.ts'
import type { LoggingEventBuilder } from '../../../../org/slf4j/spi/LoggingEventBuilder.d.ts'
export class Log4jLogger extends Object implements Serializable, LocationAwareLogger {
    static DEBUG_INT: number;
    static ERROR_INT: number;
    static FQCN: string;
    static INFO_INT: number;
    static ROOT_LOGGER_NAME: string;
    static TRACE_INT: number;
    static WARN_INT: number;
    constructor(markerFactory: Log4jMarkerFactory, logger: ExtendedLogger, name: string)
    // private logger: ExtendedLogger;
    // private markerFactory: Log4jMarkerFactory;
    readonly name: string;
    debug(format: string): void;
    debug(format: string, o: Object): void;
    debug(format: string, arg1: Object, arg2: Object): void;
    debug(format: string, args: Object[]): void;
    debug(format: string, t: Throwable): void;
    debug(marker: Marker, s: string): void;
    debug(marker: Marker, s: string, o: Object): void;
    debug(marker: Marker, s: string, o: Object, o1: Object): void;
    debug(marker: Marker, s: string, objects: Object[]): void;
    debug(marker: Marker, s: string, throwable: Throwable): void;
    error(format: string): void;
    error(format: string, o: Object): void;
    error(format: string, arg1: Object, arg2: Object): void;
    error(format: string, args: Object[]): void;
    error(format: string, t: Throwable): void;
    error(marker: Marker, s: string): void;
    error(marker: Marker, s: string, o: Object): void;
    error(marker: Marker, s: string, o: Object, o1: Object): void;
    error(marker: Marker, s: string, objects: Object[]): void;
    error(marker: Marker, s: string, throwable: Throwable): void;
    getName(): string;
    info(format: string): void;
    info(format: string, o: Object): void;
    info(format: string, arg1: Object, arg2: Object): void;
    info(format: string, args: Object[]): void;
    info(format: string, t: Throwable): void;
    info(marker: Marker, s: string): void;
    info(marker: Marker, s: string, o: Object): void;
    info(marker: Marker, s: string, o: Object, o1: Object): void;
    info(marker: Marker, s: string, objects: Object[]): void;
    info(marker: Marker, s: string, throwable: Throwable): void;
    isDebugEnabled(): boolean;
    isDebugEnabled(marker: Marker): boolean;
    isEnabledForLevel(level: Level): boolean;
    isErrorEnabled(): boolean;
    isErrorEnabled(marker: Marker): boolean;
    isInfoEnabled(): boolean;
    isInfoEnabled(marker: Marker): boolean;
    isTraceEnabled(): boolean;
    isTraceEnabled(marker: Marker): boolean;
    isWarnEnabled(): boolean;
    isWarnEnabled(marker: Marker): boolean;
    log(marker: Marker, fqcn: string, level: number, message: string, params: Object[], throwable: Throwable): void;
    makeLoggingEventBuilder(level: Level): LoggingEventBuilder;
    // private readObject(aInputStream: ObjectInputStream): void;
    trace(format: string): void;
    trace(format: string, o: Object): void;
    trace(format: string, arg1: Object, arg2: Object): void;
    trace(format: string, args: Object[]): void;
    trace(format: string, t: Throwable): void;
    trace(marker: Marker, s: string): void;
    trace(marker: Marker, s: string, o: Object): void;
    trace(marker: Marker, s: string, o: Object, o1: Object): void;
    trace(marker: Marker, s: string, objects: Object[]): void;
    trace(marker: Marker, s: string, throwable: Throwable): void;
    warn(format: string): void;
    warn(format: string, o: Object): void;
    warn(format: string, arg1: Object, arg2: Object): void;
    warn(format: string, args: Object[]): void;
    warn(format: string, t: Throwable): void;
    warn(marker: Marker, s: string): void;
    warn(marker: Marker, s: string, o: Object): void;
    warn(marker: Marker, s: string, o: Object, o1: Object): void;
    warn(marker: Marker, s: string, objects: Object[]): void;
    warn(marker: Marker, s: string, throwable: Throwable): void;
    // private writeObject(aOutputStream: ObjectOutputStream): void;
}