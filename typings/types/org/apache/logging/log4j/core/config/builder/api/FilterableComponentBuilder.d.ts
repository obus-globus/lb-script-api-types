import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/ComponentBuilder.d.ts'
import type { FilterComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterComponentBuilder.d.ts'
export interface FilterableComponentBuilder<T extends ComponentBuilder<T>> extends Object, ComponentBuilder<T>{
    add(assembler: FilterComponentBuilder): T;
}