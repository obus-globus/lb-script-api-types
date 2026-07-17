import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LoggerAdapter } from '../../../../../org/apache/logging/log4j/spi/LoggerAdapter.d.ts'
import type { LoggerContext } from '../../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
import type { LoggerContextShutdownAware } from '../../../../../org/apache/logging/log4j/spi/LoggerContextShutdownAware.d.ts'
export abstract class AbstractLoggerAdapter<L extends unknown> extends Object implements LoggerAdapter<L>, LoggerContextShutdownAware {
    constructor()
    // private lock: ReadWriteLock;
    // private registry: JavaMap<LoggerContext, JavaMap<string, L>>;
    close(): void;
    contextShutdown(loggerContext: LoggerContext): void;
    getContext(): LoggerContext;
    getContext(callerClass: Class<Object>): LoggerContext;
    getLogger(name: string): L;
    getLoggerContexts(): LoggerContext[];
    getLoggersInContext(context: LoggerContext): JavaMap<string, L>;
    newLogger(name: string, context: LoggerContext): L;
}