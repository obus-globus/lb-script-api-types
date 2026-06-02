import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PriorityProvider$Selector } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$Selector.d.ts'
import type { PriorityProvider$SelectorCondition } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider$SelectorCondition.d.ts'
export interface PriorityProvider<Context extends Object | number | string | boolean, Condition extends PriorityProvider$SelectorCondition<Context>> extends Object{
    selectors(): PriorityProvider$Selector<Context, Condition>[];
}