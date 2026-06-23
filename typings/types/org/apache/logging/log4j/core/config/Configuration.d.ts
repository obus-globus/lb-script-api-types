import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { LifeCycle$State } from '../../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Logger } from '../../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { AsyncLoggerConfigDelegate } from '../../../../../../org/apache/logging/log4j/core/async/AsyncLoggerConfigDelegate.d.ts'
import type { AsyncWaitStrategyFactory } from '../../../../../../org/apache/logging/log4j/core/async/AsyncWaitStrategyFactory.d.ts'
import type { ConfigurationListener } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationListener.d.ts'
import type { ConfigurationScheduler } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationScheduler.d.ts'
import type { ConfigurationSource } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { CustomLevelConfig } from '../../../../../../org/apache/logging/log4j/core/config/CustomLevelConfig.d.ts'
import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { Node } from '../../../../../../org/apache/logging/log4j/core/config/Node.d.ts'
import type { ReliabilityStrategy } from '../../../../../../org/apache/logging/log4j/core/config/ReliabilityStrategy.d.ts'
import type { Filterable } from '../../../../../../org/apache/logging/log4j/core/filter/Filterable.d.ts'
import type { StrSubstitutor } from '../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
import type { Advertiser } from '../../../../../../org/apache/logging/log4j/core/net/Advertiser.d.ts'
import type { ScriptManager } from '../../../../../../org/apache/logging/log4j/core/script/ScriptManager.d.ts'
import type { NanoClock } from '../../../../../../org/apache/logging/log4j/core/util/NanoClock.d.ts'
import type { WatchManager } from '../../../../../../org/apache/logging/log4j/core/util/WatchManager.d.ts'
export interface Configuration extends Object, Filterable{
    addAppender(appender: Appender): void;
    addComponent(name: string, object: Object): void;
    addFilter(filter: Filter): void;
    addListener(listener: ConfigurationListener): void;
    addLogger(name: string, loggerConfig: LoggerConfig): void;
    addLoggerAppender(logger: Logger, appender: Appender): void;
    addLoggerFilter(logger: Logger, filter: Filter): void;
    createConfiguration(node: Node, event: LogEvent): void;
    getAdvertiser(): Advertiser;
    getAppender<T extends Appender>(name: string): T;
    getAppenders(): { [key: string]: Appender };
    getAsyncLoggerConfigDelegate(): AsyncLoggerConfigDelegate;
    getAsyncWaitStrategyFactory(): AsyncWaitStrategyFactory;
    getComponent<T extends unknown>(name: string): T;
    getConfigurationSource(): ConfigurationSource;
    getConfigurationStrSubstitutor(): StrSubstitutor;
    getCustomLevels(): CustomLevelConfig[];
    getFilter(): Filter;
    getLoggerConfig(name: string): LoggerConfig;
    getLoggerContext(): LoggerContext;
    getLoggers(): { [key: string]: LoggerConfig };
    getName(): string;
    getNanoClock(): NanoClock;
    getPluginPackages(): string[];
    getProperties(): { [key: string]: string };
    getReliabilityStrategy(loggerConfig: LoggerConfig): ReliabilityStrategy;
    getRootLogger(): LoggerConfig;
    getScheduler(): ConfigurationScheduler;
    getScriptManager(): ScriptManager;
    getShutdownTimeoutMillis(): number;
    getState(): LifeCycle$State;
    getStrSubstitutor(): StrSubstitutor;
    getWatchManager(): WatchManager;
    hasFilter(): boolean;
    initialize(): void;
    isFiltered(event: LogEvent): boolean;
    isShutdownHookEnabled(): boolean;
    isStarted(): boolean;
    isStopped(): boolean;
    removeFilter(filter: Filter): void;
    removeListener(listener: ConfigurationListener): void;
    removeLogger(name: string): void;
    setAdvertiser(advertiser: Advertiser): void;
    setLoggerAdditive(logger: Logger, additive: boolean): void;
    setNanoClock(nanoClock: NanoClock): void;
    start(): void;
    stop(): void;
}