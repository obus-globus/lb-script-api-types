import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LayoutComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LayoutComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultLayoutComponentBuilder extends DefaultComponentAndConfigurationBuilder<LayoutComponentBuilder> implements LayoutComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, type: string)
}