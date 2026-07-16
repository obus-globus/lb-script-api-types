import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { URI } from '../../../../../../../java/net/URI.d.ts'
import type { LoggerContext } from '../../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationFactory } from '../../../../../../../org/apache/logging/log4j/core/config/ConfigurationFactory.d.ts'
import type { ConfigurationSource } from '../../../../../../../org/apache/logging/log4j/core/config/ConfigurationSource.d.ts'
import type { ConfigurationBuilder } from '../../../../../../../org/apache/logging/log4j/core/config/builder/api/ConfigurationBuilder.d.ts'
import type { BuiltConfiguration } from '../../../../../../../org/apache/logging/log4j/core/config/builder/impl/BuiltConfiguration.d.ts'
import type { AuthorizationProvider } from '../../../../../../../org/apache/logging/log4j/core/util/AuthorizationProvider.d.ts'
import type { PropertiesUtil } from '../../../../../../../org/apache/logging/log4j/util/PropertiesUtil.d.ts'
export class XmlConfigurationFactory extends ConfigurationFactory {
    static AUTHORIZATION_PROVIDER: string;
    static CATEGORY: string;
    static CONFIGURATION_FACTORY_PROPERTY: string;
    static CONFIGURATION_FILE_PROPERTY: string;
    static LOG4J1_CONFIGURATION_FILE_PROPERTY: string;
    static LOG4J1_EXPERIMENTAL: string;
    static SUFFIXES: string[];
    static authorizationProvider(paramprops: PropertiesUtil): AuthorizationProvider;
    static getAuthorizationProvider(): AuthorizationProvider;
    static getInstance(): ConfigurationFactory;
    static newConfigurationBuilder(paramclazz: Class<BuiltConfiguration>): ConfigurationBuilder<BuiltConfiguration>;
    static newConfigurationBuilder(): ConfigurationBuilder<BuiltConfiguration>;
    static removeConfigurationFactory(paramfactory: ConfigurationFactory): void;
    static resetConfigurationFactory(): void;
    static setConfigurationFactory(paramfactory: ConfigurationFactory): void;
    constructor()
    getConfiguration(loggerContext: LoggerContext, name: string, configLocation: URI): Configuration;
    getConfiguration(loggerContext: LoggerContext, name: string, configLocation: URI, loader: ClassLoader): Configuration;
    getConfiguration(loggerContext: LoggerContext, name: string, configLocations: URI[]): Configuration;
    getConfiguration(loggerContext: LoggerContext, source: ConfigurationSource): Configuration;
    getSupportedTypes(): string[];
}