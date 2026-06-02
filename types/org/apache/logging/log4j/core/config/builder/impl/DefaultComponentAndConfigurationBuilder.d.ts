import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
import type { DefaultComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultComponentAndConfigurationBuilder<T extends ComponentBuilder<T>> extends DefaultComponentBuilder<T, DefaultConfigurationBuilder<Configuration>> {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, type: string)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, type: string)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, type: string, value: string)
}