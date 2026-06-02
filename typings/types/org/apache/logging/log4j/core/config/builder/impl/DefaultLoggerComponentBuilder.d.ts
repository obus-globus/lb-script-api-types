import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AppenderRefComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderRefComponentBuilder.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
import type { LoggerComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LoggerComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultLoggerComponentBuilder extends DefaultComponentAndConfigurationBuilder<LoggerComponentBuilder> implements LoggerComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, level: string)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, level: string, includeLocation: boolean)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, level: string, type: string)
    constructor(builder: DefaultConfigurationBuilder<Configuration>, name: string, level: string, type: string, includeLocation: boolean)
    add(builder: AppenderRefComponentBuilder): LoggerComponentBuilder;
    add(builder: FilterComponentBuilder): LoggerComponentBuilder;
}