import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractLoggerAdapter } from '../../../../org/apache/logging/log4j/spi/AbstractLoggerAdapter.d.ts'
import type { LoggerContext } from '../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
import type { Log4jMarkerFactory } from '../../../../org/apache/logging/slf4j/Log4jMarkerFactory.d.ts'
import type { ILoggerFactory } from '../../../../org/slf4j/ILoggerFactory.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class Log4jLoggerFactory extends AbstractLoggerAdapter<Logger> implements ILoggerFactory {
    constructor(markerFactory: Log4jMarkerFactory)
    // private markerFactory: Log4jMarkerFactory;
    getContext(): LoggerContext;
    getContext(callerClass: Class<Object>): LoggerContext;
    getMarkerFactory(): Log4jMarkerFactory;
    newLogger(name: string, context: LoggerContext): Logger;
    // private validateContext(context: LoggerContext): LoggerContext;
}