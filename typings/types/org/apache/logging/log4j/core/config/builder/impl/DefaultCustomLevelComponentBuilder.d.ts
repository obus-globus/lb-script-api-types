import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { CustomLevelComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/CustomLevelComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultCustomLevelComponentBuilder extends DefaultComponentAndConfigurationBuilder<CustomLevelComponentBuilder> implements CustomLevelComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, level: number)
}