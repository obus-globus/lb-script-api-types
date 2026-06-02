import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AppenderRefComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/AppenderRefComponentBuilder.d.ts'
import type { ComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
import type { FilterableComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterableComponentBuilder.d.ts'
export interface LoggableComponentBuilder<T extends ComponentBuilder<T>> extends Object, FilterableComponentBuilder<T>{
    add(assembler: AppenderRefComponentBuilder): T;
}