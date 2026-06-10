import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static newConfigurationBuilder(paramclazz: Class<BuiltConfiguration>): ConfigurationBuilder<BuiltConfiguration>;
    static newConfigurationBuilder(): ConfigurationBuilder<BuiltConfiguration>;
    constructor()
    // private builder: ConfigurationBuilder<PropertiesConfiguration>;
    readonly loggerContext: LoggerContext;
    // private rootProperties: Properties;
    // private addFiltersToComponent<B extends FilterableComponentBuilder<ComponentBuilder<Object>>>(componentBuilder: B, properties: Properties): B;
    // private addLoggersToComponent<B extends LoggableComponentBuilder<ComponentBuilder<Object>>>(loggerBuilder: B, properties: Properties): B;
    build(): PropertiesConfiguration;
    // private createAppender(key: string, properties: Properties): AppenderComponentBuilder;
    // private createAppenderRef(key: string, properties: Properties): AppenderRefComponentBuilder;
    // private createFilter(key: string, properties: Properties): FilterComponentBuilder;
    // private createLayout(appenderName: string, properties: Properties): LayoutComponentBuilder;
    // private createLogger(key: string, properties: Properties): LoggerComponentBuilder;
    // private createRootLogger(properties: Properties): RootLoggerComponentBuilder;
    // private createScript(properties: Properties): ScriptComponentBuilder;
    // private createScriptFile(properties: Properties): ScriptFileComponentBuilder;
    getErrorPrefix(): string;
    getLoggerContext(): LoggerContext;
    isValid(): boolean;
    // private processRemainingProperties(builder: ConfigurationBuilder<PropertiesConfiguration>, properties: Properties): void;
    setConfigurationSource(source: ConfigurationSource): PropertiesConfigurationBuilder;
    setLoggerContext(loggerContext: LoggerContext): PropertiesConfigurationBuilder;
    setRootProperties(rootProperties: Properties): PropertiesConfigurationBuilder;
}