import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StateDefinition } from '../../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateHolder } from '../../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
export interface Condition extends Object {
    instantiate<S extends StateHolder<O, S>, O extends Object | number | string | boolean>(definition: StateDefinition<O, S>): (param0: S) => boolean;
}