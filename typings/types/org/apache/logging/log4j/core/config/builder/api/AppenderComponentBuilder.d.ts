import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { FilterableComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/FilterableComponentBuilder.d.ts'
import type { LayoutComponentBuilder } from '../../../../../../../../org/apache/logging/log4j/core/config/builder/api/LayoutComponentBuilder.d.ts'
export interface AppenderComponentBuilder extends Object, FilterableComponentBuilder<AppenderComponentBuilder>{
    add(builder: LayoutComponentBuilder): AppenderComponentBuilder;
    getName(): string;
}