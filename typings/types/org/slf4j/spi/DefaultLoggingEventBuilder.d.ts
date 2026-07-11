import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
import type { DefaultLoggingEvent } from '../../../org/slf4j/event/DefaultLoggingEvent.d.ts'
import type { KeyValuePair } from '../../../org/slf4j/event/KeyValuePair.d.ts'
import type { Level } from '../../../org/slf4j/event/Level.d.ts'
import type { LoggingEvent } from '../../../org/slf4j/event/LoggingEvent.d.ts'
import type { CallerBoundaryAware } from '../../../org/slf4j/spi/CallerBoundaryAware.d.ts'
import type { LocationAwareLogger } from '../../../org/slf4j/spi/LocationAwareLogger.d.ts'
import type { LoggingEventBuilder } from '../../../org/slf4j/spi/LoggingEventBuilder.d.ts'
export class DefaultLoggingEventBuilder extends Object implements CallerBoundaryAware, LoggingEventBuilder {
    constructor(arg0: Logger, arg1: Level)
    // private logger: Logger;
    // private loggingEvent: DefaultLoggingEvent;
    addArgument(arg0: () => Object | null): LoggingEventBuilder;
    addArgument(arg0: Object): LoggingEventBuilder;
    addKeyValue(arg0: string, arg1: () => Object): LoggingEventBuilder;
    addKeyValue(arg0: string, arg1: Object): LoggingEventBuilder;
    addMarker(arg0: Marker): LoggingEventBuilder;
    log(): void;
    log(arg0: () => string): void;
    log(arg0: string): void;
    log(arg0: string, arg1: Object): void;
    log(arg0: string, arg1: Object, arg2: Object): void;
    log(arg0: string, ...arg1: Object[]): void;
    log(arg0: LoggingEvent): void;
    // private logViaLocationAwareLoggerAPI(arg0: LocationAwareLogger, arg1: LoggingEvent): void;
    // private logViaPublicSLF4JLoggerAPI(arg0: LoggingEvent): void;
    // private mergeKeyValuePairs(arg0: KeyValuePair[], arg1: StringBuilder): StringBuilder;
    // private mergeMarkers(arg0: Marker[], arg1: StringBuilder): StringBuilder;
    // private mergeMarkersAndKeyValuePairsAndMessage(arg0: LoggingEvent): string;
    // private mergeMessage(arg0: string, arg1: StringBuilder): string;
    setCallerBoundary(arg0: string): void;
    setCause(arg0: Throwable): LoggingEventBuilder;
    setMessage(arg0: () => string): LoggingEventBuilder;
    setMessage(arg0: string): LoggingEventBuilder;
}