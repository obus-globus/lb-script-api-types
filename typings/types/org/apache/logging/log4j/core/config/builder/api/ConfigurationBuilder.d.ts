import type { OutputStream } from '../../../../../../../../java/io/OutputStream.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter$Result } from '../../../../../../../../org/apache/logging/log4j/core/Filter$Result.d.ts'
import type { LoggerContext } from '../../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationSource } from '../../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { AppenderComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderComponentBuilder.d.ts'
import type { AppenderRefComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderRefComponentBuilder.d.ts'
import type { ComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
import type { CustomLevelComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/CustomLevelComponentBuilder.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
import type { KeyValuePairComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/KeyValuePairComponentBuilder.d.ts'
import type { LayoutComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LayoutComponentBuilder.d.ts'
import type { LoggerComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LoggerComponentBuilder.d.ts'
import type { PropertyComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/PropertyComponentBuilder.d.ts'
import type { RootLoggerComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/RootLoggerComponentBuilder.d.ts'
import type { ScriptComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptComponentBuilder.d.ts'
import type { ScriptFileComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptFileComponentBuilder.d.ts'
import type { Builder } from '../../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export interface ConfigurationBuilder<T extends Configuration> extends Object, Builder<T>{
    add(builder: AppenderComponentBuilder): ConfigurationBuilder<T>;
    add(builder: CustomLevelComponentBuilder): ConfigurationBuilder<T>;
    add(builder: FilterComponentBuilder): ConfigurationBuilder<T>;
    add(builder: LoggerComponentBuilder): ConfigurationBuilder<T>;
    add(builder: RootLoggerComponentBuilder): ConfigurationBuilder<T>;
    add(builder: ScriptComponentBuilder): ConfigurationBuilder<T>;
    add(builder: ScriptFileComponentBuilder): ConfigurationBuilder<T>;
    addComponent(builder: ComponentBuilder<Object>): ConfigurationBuilder<T>;
    addProperty(key: string, value: string): ConfigurationBuilder<T>;
    addRootProperty(key: string, value: string): ConfigurationBuilder<T>;
    build(initialize: boolean): T;
    getErrorPrefix(): string;
    isValid(): boolean;
    newAppender(name: string, pluginName: string): AppenderComponentBuilder;
    newAppenderRef(ref: string): AppenderRefComponentBuilder;
    newAsyncLogger(name: string): LoggerComponentBuilder;
    newAsyncLogger(name: string, includeLocation: boolean): LoggerComponentBuilder;
    newAsyncLogger(name: string, level: string): LoggerComponentBuilder;
    newAsyncLogger(name: string, level: string, includeLocation: boolean): LoggerComponentBuilder;
    newAsyncLogger(name: string, level: Level): LoggerComponentBuilder;
    newAsyncLogger(name: string, level: Level, includeLocation: boolean): LoggerComponentBuilder;
    newAsyncRootLogger(): RootLoggerComponentBuilder;
    newAsyncRootLogger(includeLocation: boolean): RootLoggerComponentBuilder;
    newAsyncRootLogger(level: string): RootLoggerComponentBuilder;
    newAsyncRootLogger(level: string, includeLocation: boolean): RootLoggerComponentBuilder;
    newAsyncRootLogger(level: Level): RootLoggerComponentBuilder;
    newAsyncRootLogger(level: Level, includeLocation: boolean): RootLoggerComponentBuilder;
    newComponent<B extends ComponentBuilder<B>>(pluginName: string): ComponentBuilder<B>;
    newComponent<B extends ComponentBuilder<B>>(name: string, pluginName: string): ComponentBuilder<B>;
    newComponent<B extends ComponentBuilder<B>>(name: string, pluginName: string, value: string): ComponentBuilder<B>;
    newCustomLevel(name: string, level: number): CustomLevelComponentBuilder;
    newFilter(pluginName: string, onMatch: string, onMismatch: string): FilterComponentBuilder;
    newFilter(pluginName: string, onMatch: Filter$Result, onMismatch: Filter$Result): FilterComponentBuilder;
    newKeyValuePair(key: string, value: string): KeyValuePairComponentBuilder;
    newLayout(pluginName: string): LayoutComponentBuilder;
    newLogger(name: string): LoggerComponentBuilder;
    newLogger(name: string, includeLocation: boolean): LoggerComponentBuilder;
    newLogger(name: string, level: string): LoggerComponentBuilder;
    newLogger(name: string, level: string, includeLocation: boolean): LoggerComponentBuilder;
    newLogger(name: string, level: Level): LoggerComponentBuilder;
    newLogger(name: string, level: Level, includeLocation: boolean): LoggerComponentBuilder;
    newProperty(name: string, value: string): PropertyComponentBuilder;
    newRootLogger(): RootLoggerComponentBuilder;
    newRootLogger(includeLocation: boolean): RootLoggerComponentBuilder;
    newRootLogger(level: string): RootLoggerComponentBuilder;
    newRootLogger(level: string, includeLocation: boolean): RootLoggerComponentBuilder;
    newRootLogger(level: Level): RootLoggerComponentBuilder;
    newRootLogger(level: Level, includeLocation: boolean): RootLoggerComponentBuilder;
    newScript(name: string, language: string, text: string): ScriptComponentBuilder;
    newScriptFile(path: string): ScriptFileComponentBuilder;
    newScriptFile(name: string, path: string): ScriptFileComponentBuilder;
    setAdvertiser(advertiser: string): ConfigurationBuilder<T>;
    setConfigurationName(name: string): ConfigurationBuilder<T>;
    setConfigurationSource(configurationSource: ConfigurationSource): ConfigurationBuilder<T>;
    setDestination(destination: string): ConfigurationBuilder<T>;
    setLoggerContext(loggerContext: LoggerContext): void;
    setMonitorInterval(intervalSeconds: string): ConfigurationBuilder<T>;
    setPackages(packages: string): ConfigurationBuilder<T>;
    setShutdownHook(flag: string): ConfigurationBuilder<T>;
    setShutdownTimeout(timeout: number, timeUnit: TimeUnit): ConfigurationBuilder<T>;
    setStatusLevel(level: Level): ConfigurationBuilder<T>;
    setVerbosity(verbosity: string): ConfigurationBuilder<T>;
    toXmlConfiguration(): string;
    writeXmlConfiguration(output: OutputStream): void;
}