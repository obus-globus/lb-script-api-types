import type { WeakReference } from '../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AsyncLoggerConfigDelegate } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfigDelegate.d.ts'
import type { AsyncLoggerConfigDisruptor } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfigDisruptor.d.ts'
import type { AsyncWaitStrategyFactory } from '../../../../../../org/apache/logging/log4j/core/async/AsyncWaitStrategyFactory.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { ConfigurationScheduler } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationScheduler.d.ts'
import type { ConfigurationSource } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { CustomLevelConfig } from '../../../../../../org/apache/logging/log4j/core/config/CustomLevelConfig.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { MonitorResource } from '../../../../../../org/apache/logging/log4j/core/config/MonitorResource.d.ts'
import type { Node } from '../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { Reconfigurable } from '../../../../../../org/apache/logging/log4j/core/config/Reconfigurable.d.ts'
import type { ReliabilityStrategy } from '../../../../../../org/apache/logging/log4j/core/config/ReliabilityStrategy.d.ts'
import type { PluginManager } from '../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginManager.d.ts'
import type { PluginType } from '../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
import type { AbstractFilterable } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilterable.d.ts'
import type { Interpolator } from '../../../../../../org/apache/logging/log4j/core/lookup/Interpolator.d.ts'
import type { StrSubstitutor } from '../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
import type { ScriptManager } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager.d.ts'
import type { NanoClock } from '../../../../../../org/apache/logging/log4j/core/util/NanoClock.d.ts'
import type { WatchManager } from '../../../../../../org/apache/logging/log4j/core/util/WatchManager.d.ts'
export abstract class AbstractConfiguration extends AbstractFilterable implements Configuration {
    static CONTEXT_PROPERTIES: string;
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    static getDefaultLevel(): Level;
    constructor(loggerContext: LoggerContext, configurationSource: ConfigurationSource)
    // private advertisement: Object;
    readonly advertiser: Advertiser;
    // private advertiserNode: Node;
    readonly appenders: { [key: string]: Appender };
    // private asyncLoggerConfigDisruptor: AsyncLoggerConfigDisruptor;
    readonly asyncWaitStrategyFactory: AsyncWaitStrategyFactory;
    // private componentMap: { [key: string]: Object };
    // private configurationScheduler: ConfigurationScheduler;
    readonly configurationSource: ConfigurationSource;
    readonly configurationStrSubstitutor: StrSubstitutor;
    readonly customLevels: CustomLevelConfig[];
    // private isShutdownHookEnabled: boolean;
    // private listeners: ConfigurationListener[];
    // private loggerConfigs: { [key: string]: LoggerConfig };
    readonly loggerContext: WeakReference<LoggerContext>;
    // private monitorResources: MonitorResource[];
    readonly name: string;
    readonly nanoClock: NanoClock;
    pluginManager: PluginManager;
    readonly pluginPackages: string[];
    // private propertyMap: { [key: string]: string };
    // private root: LoggerConfig;
    rootNode: Node;
    // private runtimeStrSubstitutor: StrSubstitutor;
    scriptManager: ScriptManager;
    shutdownTimeoutMillis: number;
    // private tempLookup: Interpolator;
    readonly watchManager: WatchManager;
    addAppender(appender: Appender): void;
    addComponent(componentName: string, obj: Object): void;
    addListener(listener: ConfigurationListener): void;
    addLogger(loggerName: string, loggerConfig: LoggerConfig): void;
    addLoggerAppender(logger: Logger, appender: Appender): void;
    addLoggerFilter(logger: Logger, filter: Filter): void;
    createAdvertiser(advertiserString: string, configSource: ConfigurationSource, buffer: number[], contentType: string): void;
    createConfiguration(node: Node, event: LogEvent): void;
    createPluginObject(type: PluginType<Object>, node: Node): Object;
    // private createPluginObject(type: PluginType<Object>, node: Node, event: LogEvent): Object;
    doConfigure(): void;
    getAdvertiser(): Advertiser;
    getAppender<T extends Appender>(appenderName: string): T;
    getAppenders(): { [key: string]: Appender };
    // private getAsyncAppenders(all: Appender[]): Appender[];
    getAsyncLoggerConfigDelegate(): AsyncLoggerConfigDelegate;
    getAsyncWaitStrategyFactory(): AsyncWaitStrategyFactory;
    getComponent<T extends Object | number | string | boolean>(componentName: string): T;
    getConfigurationSource(): ConfigurationSource;
    getConfigurationStrSubstitutor(): StrSubstitutor;
    getConfigurationStrSubstitutor(): StrSubstitutor;
    getCustomLevels(): CustomLevelConfig[];
    getDefaultStatus(): Level;
    getLogger(loggerName: string): LoggerConfig;
    getLoggerConfig(loggerName: string): LoggerConfig;
    getLoggerContext(): LoggerContext;
    getLoggers(): { [key: string]: LoggerConfig };
    getName(): string;
    getNanoClock(): NanoClock;
    getPluginManager(): PluginManager;
    getPluginPackages(): string[];
    getProperties(): { [key: string]: string };
    getReliabilityStrategy(loggerConfig: LoggerConfig): ReliabilityStrategy;
    getRootLogger(): LoggerConfig;
    getRootNode(): Node;
    getScheduler(): ConfigurationScheduler;
    getScriptManager(): ScriptManager;
    getShutdownTimeoutMillis(): number;
    getStrSubstitutor(): StrSubstitutor;
    getWatchManager(): WatchManager;
    // private hasAsyncLoggers(): boolean;
    initialize(): void;
    initializeWatchers(reconfigurable: Reconfigurable, configSource: ConfigurationSource, monitorIntervalSeconds: number): void;
    // private isConfigurationMonitoringEnabled(): boolean;
    isShutdownHookEnabled(): boolean;
    // private monitorSource(reconfigurable: Reconfigurable, configSource: ConfigurationSource): void;
    preConfigure(node: Node): void;
    processConditionals(node: Node): void;
    processSelect(selectNode: Node, type: PluginType<Object>): Node[];
    removeAppender(appenderName: string): void;
    removeListener(listener: ConfigurationListener): void;
    removeLogger(loggerName: string): void;
    setAdvertiser(advertiser: Advertiser): void;
    setLoggerAdditive(logger: Logger, additive: boolean): void;
    setName(name: string): void;
    setNanoClock(nanoClock: NanoClock): void;
    // private setParents(): void;
    setPluginManager(pluginManager: PluginManager): void;
    setScriptManager(scriptManager: ScriptManager): void;
    setToDefault(): void;
    setup(): void;
    // private setupAdvertisement(): void;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit, changeLifeCycleState: boolean): boolean;
    // private watchMonitorResources(): void;
}