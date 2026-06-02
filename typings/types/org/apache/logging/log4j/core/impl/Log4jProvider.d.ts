import type { LoggerContextFactory } from '../../../../../../org/apache/logging/log4j/spi/LoggerContextFactory.d.ts'
import type { Provider } from '../../../../../../org/apache/logging/log4j/spi/Provider.d.ts'
import type { ThreadContextMap } from '../../../../../../org/apache/logging/log4j/spi/ThreadContextMap.d.ts'
import type { Lazy } from '../../../../../../org/apache/logging/log4j/util/Lazy.d.ts'
export class Log4jProvider extends Provider {
    static FACTORY_PRIORITY: string;
    static LOGGER_CONTEXT_FACTORY: string;
    static PROVIDER_PROPERTY_NAME: string;
    static THREAD_CONTEXT_MAP: string;
    constructor()
    // private loggerContextFactoryLazy: Lazy<LoggerContextFactory>;
    // private threadContextMapLazy: Lazy<ThreadContextMap>;
    // private createThreadContextMap(): ThreadContextMap;
    getLoggerContextFactory(): LoggerContextFactory;
    getThreadContextMapInstance(): ThreadContextMap;
    resetThreadContextMap(): void;
}