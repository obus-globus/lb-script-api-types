import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { LoggerContext } from '../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { ConfigurationSource } from '../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { AppenderComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderComponentBuilder.d.ts'
import type { AppenderRefComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderRefComponentBuilder.d.ts'
import type { ComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
import type { ConfigurationBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/ConfigurationBuilder.d.ts'
import type { ConfigurationBuilderFactory } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/ConfigurationBuilderFactory.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
import type { FilterableComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterableComponentBuilder.d.ts'
import type { LayoutComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/LayoutComponentBuilder.d.ts'
import type { LoggableComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/LoggableComponentBuilder.d.ts'
import type { LoggerComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/LoggerComponentBuilder.d.ts'
import type { RootLoggerComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/RootLoggerComponentBuilder.d.ts'
import type { ScriptComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptComponentBuilder.d.ts'
import type { ScriptFileComponentBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/ScriptFileComponentBuilder.d.ts'
import type { BuiltConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/builder/impl/BuiltConfiguration.d.ts'
import type { PropertiesConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/properties/PropertiesConfiguration.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class PropertiesConfigurationBuilder extends ConfigurationBuilderFactory implements Builder<PropertiesConfiguration> {
    static newConfigurationBuilder<T extends BuiltConfiguration>(paramclazz: Class<T>): ConfigurationBuilder<T>;
    static newConfigurationBuilder(): ConfigurationBuilder<BuiltConfiguration>;
    constructor()
    // private builder: ConfigurationBuilder<PropertiesConfiguration>;
    readonly loggerContext: LoggerContext;
    // private rootProperties: { [key: string]: any };
    // private addFiltersToComponent<B extends FilterableComponentBuilder<ComponentBuilder<any>>>(componentBuilder: B, properties: { [key: string]: any }): B;
    // private addLoggersToComponent<B extends LoggableComponentBuilder<ComponentBuilder<any>>>(loggerBuilder: B, properties: { [key: string]: any }): B;
    build(): PropertiesConfiguration;
    // private createAppender(key: string, properties: { [key: string]: any }): AppenderComponentBuilder;
    // private createAppenderRef(key: string, properties: { [key: string]: any }): AppenderRefComponentBuilder;
    // private createFilter(key: string, properties: { [key: string]: any }): FilterComponentBuilder;
    // private createLayout(appenderName: string, properties: { [key: string]: any }): LayoutComponentBuilder;
    // private createLogger(key: string, properties: { [key: string]: any }): LoggerComponentBuilder;
    // private createRootLogger(properties: { [key: string]: any }): RootLoggerComponentBuilder;
    // private createScript(properties: { [key: string]: any }): ScriptComponentBuilder;
    // private createScriptFile(properties: { [key: string]: any }): ScriptFileComponentBuilder;
    getErrorPrefix(): string;
    getLoggerContext(): LoggerContext;
    isValid(): boolean;
    // private processRemainingProperties(builder: ConfigurationBuilder<PropertiesConfiguration>, properties: { [key: string]: any }): void;
    // private removeDefinedButUnusedProperties(prefix: string): void;
    setConfigurationSource(source: ConfigurationSource): PropertiesConfigurationBuilder;
    setLoggerContext(loggerContext: LoggerContext): PropertiesConfigurationBuilder;
    setRootProperties(rootProperties: { [key: string]: any }): PropertiesConfigurationBuilder;
}