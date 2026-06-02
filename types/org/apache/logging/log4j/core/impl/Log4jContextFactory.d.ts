import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationSource } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { ContextSelector } from '../../../../../../org/apache/logging/log4j/core/selector/ContextSelector.d.ts'
import type { Cancellable } from '../../../../../../org/apache/logging/log4j/core/util/Cancellable.d.ts'
import type { ShutdownCallbackRegistry } from '../../../../../../org/apache/logging/log4j/core/util/ShutdownCallbackRegistry.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
import type { LoggerContextFactory } from '../../../../../../org/apache/logging/log4j/spi/LoggerContextFactory.d.ts'
export class Log4jContextFactory extends Object implements ShutdownCallbackRegistry, LoggerContextFactory {
    static SHUTDOWN_CALLBACK_REGISTRY: string;
    static SHUTDOWN_HOOK_ENABLED: string;
    static SHUTDOWN_HOOK_MARKER: Marker;
    constructor()
    constructor(selector: ContextSelector)
    constructor(selector: ContextSelector, shutdownCallbackRegistry: ShutdownCallbackRegistry)
    constructor(shutdownCallbackRegistry: ShutdownCallbackRegistry)
    readonly selector: ContextSelector;
    readonly shutdownCallbackRegistry: ShutdownCallbackRegistry;
    addShutdownCallback(callback: () => void): Cancellable;
    getContext(fqcn: string, loader: ClassLoader, externalContext: Object, currentContext: boolean): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, externalContext: Object, currentContext: boolean, configLocation: URI, name: string): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, externalContext: Object, currentContext: boolean, configLocations: URI[], name: string): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, externalContext: Object, currentContext: boolean, configuration: Configuration): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, externalContext: Object, currentContext: boolean, source: ConfigurationSource): LoggerContext;
    getContext(fqcn: string, loader: ClassLoader, entry: Map$Entry<string, Object>, currentContext: boolean, configLocation: URI, name: string): LoggerContext;
    getSelector(): ContextSelector;
    getShutdownCallbackRegistry(): ShutdownCallbackRegistry;
    hasContext(fqcn: string, loader: ClassLoader, currentContext: boolean): boolean;
    hasContext(fqcn: string, loader: ClassLoader, currentContext: boolean): boolean;
    // private initializeShutdownCallbackRegistry(): void;
    isClassLoaderDependent(): boolean;
    isClassLoaderDependent(): boolean;
    isShutdownHookEnabled(): boolean;
    removeContext(context: LoggerContext): void;
    shutdown(fqcn: string, loader: ClassLoader, currentContext: boolean, allContexts: boolean): void;
    shutdown(fqcn: string, loader: ClassLoader, currentContext: boolean, allContexts: boolean): void;
}