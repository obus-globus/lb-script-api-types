import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AppenderRefComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderRefComponentBuilder.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
import type { RootLoggerComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/RootLoggerComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultRootLoggerComponentBuilder extends DefaultComponentAndConfigurationBuilder<RootLoggerComponentBuilder> implements RootLoggerComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, level: string)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, level: string, includeLocation: boolean)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, level: string, type: string)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, level: string, type: string, includeLocation: boolean)
    add(builder: AppenderRefComponentBuilder): RootLoggerComponentBuilder;
    add(builder: FilterComponentBuilder): RootLoggerComponentBuilder;
}