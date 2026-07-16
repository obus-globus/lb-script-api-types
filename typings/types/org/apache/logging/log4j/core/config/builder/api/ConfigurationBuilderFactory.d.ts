import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ConfigurationBuilder.d.ts'
import type { BuiltConfiguration } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/BuiltConfiguration.d.ts'
export abstract class ConfigurationBuilderFactory extends Object {
    static newConfigurationBuilder<T extends BuiltConfiguration>(paramclazz: Class<T>): ConfigurationBuilder<T>;
    static newConfigurationBuilder(): ConfigurationBuilder<BuiltConfiguration>;
    constructor()
}