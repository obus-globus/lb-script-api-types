import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AppenderComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderComponentBuilder.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
import type { LayoutComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LayoutComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultAppenderComponentBuilder extends DefaultComponentAndConfigurationBuilder<AppenderComponentBuilder> implements AppenderComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, type: string)
    add(builder: FilterComponentBuilder): AppenderComponentBuilder;
    add(builder: LayoutComponentBuilder): AppenderComponentBuilder;
}