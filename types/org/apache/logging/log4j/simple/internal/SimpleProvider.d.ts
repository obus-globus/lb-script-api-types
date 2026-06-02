import type { LoggerContextFactory } from '../../../../../../org/apache/logging/log4j/spi/LoggerContextFactory.d.ts'
import type { Provider } from '../../../../../../org/apache/logging/log4j/spi/Provider.d.ts'
import type { ThreadContextMap } from '../../../../../../org/apache/logging/log4j/spi/ThreadContextMap.d.ts'
export class SimpleProvider extends Provider {
    static FACTORY_PRIORITY: string;
    static LOGGER_CONTEXT_FACTORY: string;
    static PROVIDER_PROPERTY_NAME: string;
    static THREAD_CONTEXT_MAP: string;
    constructor()
    readonly threadContextMap: ThreadContextMap;
    getLoggerContextFactory(): LoggerContextFactory;
    getThreadContextMapInstance(): ThreadContextMap;
}