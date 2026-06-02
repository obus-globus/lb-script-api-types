import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { PropertyComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/PropertyComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultPropertyComponentBuilder extends DefaultComponentAndConfigurationBuilder<PropertyComponentBuilder> implements PropertyComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, value: string)
}