import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StateDefinition } from '../../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export interface Condition extends Object {
    instantiate(definition: StateDefinition<O, S>): (param0: S) => kotlin.Boolean;
}