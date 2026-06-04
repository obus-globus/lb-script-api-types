import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { ContextSelector } from '../../../../../../org/apache/logging/log4j/core/selector/ContextSelector.d.ts'
import type { Lazy } from '../../../../../../org/apache/logging/log4j/util/Lazy.d.ts'
export class BasicContextSelector extends Object implements ContextSelector {
    static DEFAULT_STOP_TIMEOUT: number;
    constructor()
    // private defaultLoggerContext: Lazy<LoggerContext>;
    getContext(fqcn: string, loader: ClassLoader, currentContext: boolean): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, currentContext: boolean, configLocation: URI): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, entry: Map$Entry<string, Object>, currentContext: boolean): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, entry: Map$Entry<string, Object>, currentContext: boolean, configLocation: URI): LoggerContext;
    getLoggerContexts(): LoggerContext[];
    hasContext(fqcn: string, loader: ClassLoader, currentContext: boolean): boolean;
    isClassLoaderDependent(): boolean;
    locateContext(name: string, configLocation: string): LoggerContext;
    removeContext(context: LoggerContext): void;
    shutdown(fqcn: string, loader: ClassLoader, currentContext: boolean, allContexts: boolean): void;
}