import type { OutputStream } from '../../../../../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../../../../java/util/Optional.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { XMLStreamWriter } from '../../../../../../../../javax/xml/stream/XMLStreamWriter.d.ts'
import type { Result } from '../../../../../../../../javax/xml/transform/Result.d.ts'
import type { Source } from '../../../../../../../../javax/xml/transform/Source.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Filter$Result } from '../../../../../../../../org/apache/logging/log4j/core/Filter$Result.d.ts'
import type { LoggerContext } from '../../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { ConfigurationSource } from '../../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { AppenderComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderComponentBuilder.d.ts'
import type { AppenderRefComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderRefComponentBuilder.d.ts'
import type { Component } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/Component.d.ts'
import type { ComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
import type { ConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ConfigurationBuilder.d.ts'
import type { CustomLevelComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/CustomLevelComponentBuilder.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
import type { KeyValuePairComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/KeyValuePairComponentBuilder.d.ts'
import type { LayoutComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LayoutComponentBuilder.d.ts'
import type { LoggerComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LoggerComponentBuilder.d.ts'
import type { PropertyComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/PropertyComponentBuilder.d.ts'
import type { RootLoggerComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/RootLoggerComponentBuilder.d.ts'
import type { ScriptComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptComponentBuilder.d.ts'
import type { ScriptFileComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptFileComponentBuilder.d.ts'
import type { BuiltConfiguration } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/BuiltConfiguration.d.ts'
export class DefaultConfigurationBuilder<T extends BuiltConfiguration> extends Object implements ConfigurationBuilder<T> {
    static formatXml(paramsource: Source, paramresult: Result): void;
    constructor()
    constructor(clazz: Class<T>)
    // private advertiser: string;
    // private appenders: Component;
    // private clazz: Class<T>;
    // private customLevels: Component;
    // private destination: string;
    // private filters: Component;
    // private level: Level;
    readonly loggerContext: LoggerContext;
    // private loggers: Component;
    // private monitorInterval: number;
    // private name: string;
    // private packages: string;
    // private properties: Component;
    // private root: Component;
    // private scripts: Component;
    // private shutdownFlag: string;
    // private shutdownTimeoutMillis: number;
    // private source: ConfigurationSource;
    add(builder: AppenderComponentBuilder): ConfigurationBuilder<T>;
    add(parent: Component, builder: ComponentBuilder<Object>): ConfigurationBuilder<T>;
    add(builder: CustomLevelComponentBuilder): ConfigurationBuilder<T>;
    add(builder: FilterComponentBuilder): ConfigurationBuilder<T>;
    add(builder: LoggerComponentBuilder): ConfigurationBuilder<T>;
    add(builder: RootLoggerComponentBuilder): ConfigurationBuilder<T>;
    add(builder: ScriptComponentBuilder): ConfigurationBuilder<T>;
    add(builder: ScriptFileComponentBuilder): ConfigurationBuilder<T>;
    addComponent(builder: ComponentBuilder<Object>): ConfigurationBuilder<T>;
    addProperty(key: string, value: string): ConfigurationBuilder<T>;
    addRootProperty(key: string, value: string): ConfigurationBuilder<T>;
    build(): T;
    build(initialize: boolean): T;
    // private formatXml(xml: string): string;
    // private getTopLevelComponent(pluginType: string): Optional<Component>;
    newAppender(name: string, type: string): AppenderComponentBuilder;
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
    newComponent<B extends ComponentBuilder<B>>(type: string): ComponentBuilder<B>;
    newComponent<B extends ComponentBuilder<B>>(name: string, type: string): ComponentBuilder<B>;
    newComponent<B extends ComponentBuilder<B>>(name: string, type: string, value: string): ComponentBuilder<B>;
    newCustomLevel(name: string, level: number): CustomLevelComponentBuilder;
    newFilter(type: string, onMatch: string, onMismatch: string): FilterComponentBuilder;
    newFilter(type: string, onMatch: Filter$Result, onMismatch: Filter$Result): FilterComponentBuilder;
    newKeyValuePair(key: string, value: string): KeyValuePairComponentBuilder;
    newLayout(type: string): LayoutComponentBuilder;
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
    // private writeXmlAttributes(xmlWriter: XMLStreamWriter, component: Component): void;
    // private writeXmlComponent(xmlWriter: XMLStreamWriter, component: Component): void;
    writeXmlConfiguration(output: OutputStream): void;
    // private writeXmlConfiguration(xmlWriter: XMLStreamWriter): void;
    // private writeXmlSection(xmlWriter: XMLStreamWriter, component: Component): void;
}