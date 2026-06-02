import type { Configuration } from '../../../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { CompositeFilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/CompositeFilterComponentBuilder.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
import type { DefaultComponentAndConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultComponentAndConfigurationBuilder.d.ts'
import type { DefaultConfigurationBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/impl/DefaultConfigurationBuilder.d.ts'
export class DefaultCompositeFilterComponentBuilder extends DefaultComponentAndConfigurationBuilder<CompositeFilterComponentBuilder> implements CompositeFilterComponentBuilder {
    constructor(builder: DefaultConfigurationBuilder<Configuration>, onMatch: string, onMismatch: string)
    add(builder: FilterComponentBuilder): CompositeFilterComponentBuilder;
}