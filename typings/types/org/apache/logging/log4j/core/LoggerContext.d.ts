import type { PropertyChangeEvent } from '../../../../../java/beans/PropertyChangeEvent.d.ts'
import type { PropertyChangeListener } from '../../../../../java/beans/PropertyChangeListener.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { AbstractLifeCycle } from '../../../../../org/apache/logging/log4j/core/AbstractLifeCycle.d.ts'
import type { Filter } from '../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Logger as Logger_2 } from '../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { Configuration } from '../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationListener } from '../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { Reconfigurable } from '../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { Cancellable } from '../../../../../org/apache/logging/log4j/core/util/Cancellable.d.ts'
import type { InternalLoggerRegistry } from '../../../../../org/apache/logging/log4j/core/util/internal/InternalLoggerRegistry.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { LoggerContext as LoggerContext_2 } from '../../../../../org/apache/logging/log4j/spi/LoggerContext.d.ts'
import type { LoggerContextShutdownAware } from '../../../../../org/apache/logging/log4j/spi/LoggerContextShutdownAware.d.ts'
import type { LoggerContextShutdownEnabled } from '../../../../../org/apache/logging/log4j/spi/LoggerContextShutdownEnabled.d.ts'
import type { LoggerRegistry } from '../../../../../org/apache/logging/log4j/spi/LoggerRegistry.d.ts'
import type { Terminable } from '../../../../../org/apache/logging/log4j/spi/Terminable.d.ts'
export class LoggerContext extends AbstractLifeCycle implements AutoCloseable, ConfigurationListener, LoggerContext_2, LoggerContextShutdownEnabled, Terminable {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static EMPTY_ARRAY: (Object | null)[];
    static PROPERTY_CONFIG: string;
    static getContext(): LoggerContext;
    static getContext(paramcurrentContext: boolean): LoggerContext;
    static getContext(paramloader: ClassLoader, paramcurrentContext: boolean, paramconfigLocation: URI): LoggerContext;
    constructor(name: string)
    constructor(name: string, externalContext: Object)
    constructor(name: string, externalContext: Object, configLocn: URI)
    constructor(name: string, externalContext: Object, configLocn: string)
    readonly configLocation: URI;
    // private configLock: Lock;
    readonly configuration: Configuration;
    // private contextName: string;
    // private externalMap: { [key: string]: Object };
    readonly listeners: LoggerContextShutdownAware[];
    readonly loggerRegistry: InternalLoggerRegistry;
    // private propertyChangeListeners: PropertyChangeListener[];
    // private shutdownCallback: Cancellable;
    addFilter(filter: Filter): void;
    addPropertyChangeListener(listener: PropertyChangeListener): void;
    addShutdownListener(listener: LoggerContextShutdownAware): void;
    close(): void;
    // private firePropertyChangeEvent(event: PropertyChangeEvent): void;
    getConfigLocation(): URI;
    getConfiguration(): Configuration;
    getExternalContext(): Object;
    getListeners(): LoggerContextShutdownAware[];
    getLogger(cls: Class<Object>): ExtendedLogger;
    getLogger(cls: Class<Object>, messageFactory: MessageFactory): ExtendedLogger;
    getLogger(name: string): Logger_2;
    getLogger(name: string, messageFactory: MessageFactory): Logger_2;
    getLogger(cls: Class<Object>): ExtendedLogger;
    getLogger(cls: Class<Object>, messageFactory: MessageFactory): ExtendedLogger;
    getLoggerRegistry(): LoggerRegistry<Logger_2>;
    getLoggerRegistry(): LoggerRegistry<Logger>;
    getLoggers(): E[];
    getName(): string;
    getObject(key: string): Object;
    getObject(key: string): Object;
    getRootLogger(): Logger_2;
    hasLogger(name: string): boolean;
    hasLogger(name: string, messageFactoryClass: Class<MessageFactory>): boolean;
    hasLogger(name: string, messageFactory: MessageFactory): boolean;
    // private initApiModule(): void;
    // private newInstance(name: string, messageFactory: MessageFactory): Logger_2;
    newInstance(context: LoggerContext, name: string, messageFactory: MessageFactory): Logger_2;
    onChange(reconfigurable: Reconfigurable): void;
    putObject(key: string, value: Object): Object;
    putObject(key: string, value: Object): Object;
    putObjectIfAbsent(key: string, value: Object): Object;
    putObjectIfAbsent(key: string, value: Object): Object;
    reconfigure(): void;
    // private reconfigure(configURI: URI): void;
    reconfigure(configuration: Configuration): void;
    removeFilter(filter: Filter): void;
    removeObject(key: string): Object;
    removeObject(key: string, value: Object): boolean;
    removeObject(key: string): Object;
    removeObject(key: string, value: Object): boolean;
    removePropertyChangeListener(listener: PropertyChangeListener): void;
    setConfigLocation(configLocation: URI): void;
    setConfiguration(config: Configuration): Configuration;
    setExternalContext(context: Object): void;
    setName(name: string): void;
    // private setUpShutdownHook(): void;
    start(): void;
    start(config: Configuration): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    terminate(): void;
    // private unregisterJmxBeans(): void;
    updateLoggers(): void;
    updateLoggers(config: Configuration): void;
}