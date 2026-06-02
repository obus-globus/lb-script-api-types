import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { ClassLoaderContextSelector } from '../../../../../../org/apache/logging/log4j/core/selector/ClassLoaderContextSelector.d.ts'
export class AsyncLoggerContextSelector extends ClassLoaderContextSelector {
    static DEFAULT_STOP_TIMEOUT: number;
    static isSelected(): boolean;
    constructor()
    createContext(name: string, configLocation: URI): LoggerContext;
    defaultContextName(): string;
    toContextMapKey(loader: ClassLoader): string;
}