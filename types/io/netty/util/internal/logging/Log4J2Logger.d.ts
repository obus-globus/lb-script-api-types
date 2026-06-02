import type { InternalLogLevel } from '../../../../../io/netty/util/internal/logging/InternalLogLevel.d.ts'
import type { InternalLogger } from '../../../../../io/netty/util/internal/logging/InternalLogger.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { ExtendedLoggerWrapper } from '../../../../../org/apache/logging/log4j/spi/ExtendedLoggerWrapper.d.ts'
export class Log4J2Logger extends ExtendedLoggerWrapper implements InternalLogger {
    static CATCHING_MARKER: Marker;
    static DEFAULT_FLOW_MESSAGE_FACTORY_CLASS: Class<Object>;
    static DEFAULT_MESSAGE_FACTORY_CLASS: Class<Object>;
    static ENTRY_MARKER: Marker;
    static EXCEPTION_MARKER: Marker;
    static EXIT_MARKER: Marker;
    static FLOW_MARKER: Marker;
    static THROWING_MARKER: Marker;
    static checkMessageFactory(paramlogger: ExtendedLogger, parammessageFactory: MessageFactory): void;
    static getRecursionDepth(): number;
    constructor(arg0: Logger)
    debug(arg0: Throwable): void;
    error(arg0: Throwable): void;
    info(arg0: Throwable): void;
    isEnabled(arg0: InternalLogLevel): boolean;
    log(arg0: InternalLogLevel, arg1: string): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object, arg3: Object): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Object[]): void;
    log(arg0: InternalLogLevel, arg1: string, arg2: Throwable): void;
    log(arg0: InternalLogLevel, arg1: Throwable): void;
    name(): string;
    trace(arg0: Throwable): void;
    warn(arg0: Throwable): void;
}