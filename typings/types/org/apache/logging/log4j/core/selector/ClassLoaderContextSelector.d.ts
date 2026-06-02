import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { ContextSelector } from '../../../../../../org/apache/logging/log4j/core/selector/ContextSelector.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
import type { LoggerContextShutdownAware } from '../../../../../../org/apache/logging/log4j/spi/LoggerContextShutdownAware.d.ts'
import type { Lazy } from '../../../../../../org/apache/logging/log4j/util/Lazy.d.ts'
export class ClassLoaderContextSelector extends Object implements ContextSelector, LoggerContextShutdownAware {
    static DEFAULT_STOP_TIMEOUT: number;
    constructor()
    // private defaultLoggerContext: Lazy<LoggerContext>;
    contextShutdown(loggerContext: LoggerContext): void;
    createContext(name: string, configLocation: URI): LoggerContext;
    defaultContextName(): string;
    // private findContext(loaderOrNull: ClassLoader): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, currentContext: boolean): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, currentContext: boolean, configLocation: URI): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, entry: Map$Entry<string, Object>, currentContext: boolean, configLocation: URI): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, entry: Map$Entry<string, Object>, currentContext: boolean): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, entry: Map$Entry<string, Object>, currentContext: boolean, configLocation: URI): LoggerContext;
    getDefault(): LoggerContext;
    getLoggerContexts(): LoggerContext[];
    hasContext(fqcn: string, loader: ClassLoader, currentContext: boolean): boolean;
    hasContext(fqcn: string, loader: ClassLoader, currentContext: boolean): boolean;
    isClassLoaderDependent(): boolean;
    isClassLoaderDependent(): boolean;
    // private locateContext(loaderOrNull: ClassLoader, entry: Map$Entry<string, Object>, configLocation: URI): LoggerContext;
    removeContext(context: LoggerContext): void;
    shutdown(fqcn: string, loader: ClassLoader, currentContext: boolean, allContexts: boolean): void;
    shutdown(fqcn: string, loader: ClassLoader, currentContext: boolean, allContexts: boolean): void;
    toContextMapKey(loader: ClassLoader): string;
}