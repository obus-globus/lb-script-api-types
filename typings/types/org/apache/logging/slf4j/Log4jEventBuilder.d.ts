import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../org/apache/logging/log4j/Level.d.ts'
import type { Logger } from '../../../../org/apache/logging/log4j/Logger.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Log4jMarkerFactory } from '../../../../org/apache/logging/slf4j/Log4jMarkerFactory.d.ts'
import type { Marker as Marker_2 } from '../../../../org/slf4j/Marker.d.ts'
import type { CallerBoundaryAware } from '../../../../org/slf4j/spi/CallerBoundaryAware.d.ts'
import type { LoggingEventBuilder } from '../../../../org/slf4j/spi/LoggingEventBuilder.d.ts'
export class Log4jEventBuilder extends Object implements CallerBoundaryAware, LoggingEventBuilder {
    constructor(markerFactory: Log4jMarkerFactory, logger: Logger, level: Level)
    // private arguments: Object[];
    // private fqcn: string;
    // private keyValuePairs: { [key: string]: string };
    // private level: Level;
    // private logger: Logger;
    // private marker: Marker;
    // private markerFactory: Log4jMarkerFactory;
    // private message: string;
    // private throwable: Throwable;
    addArgument(objectSupplier: () => Object | null): LoggingEventBuilder;
    addArgument(p: Object): LoggingEventBuilder;
    addKeyValue(key: string, valueSupplier: () => Object): LoggingEventBuilder;
    addKeyValue(key: string, value: Object): LoggingEventBuilder;
    addMarker(marker: Marker_2): LoggingEventBuilder;
    log(): void;
    log(messageSupplier: () => string): void;
    log(message: string): void;
    log(message: string, arg: Object): void;
    log(message: string, arg0: Object, arg1: Object): void;
    log(message: string, args: Object[]): void;
    setCallerBoundary(fqcn: string): void;
    setCause(cause: Throwable): LoggingEventBuilder;
    setMessage(messageSupplier: () => string): LoggingEventBuilder;
    setMessage(message: string): LoggingEventBuilder;
}