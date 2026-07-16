import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
import type { StateHolder } from '../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
export class VariantSelector extends Object {
    static predicate<O extends unknown, S extends StateHolder<O, S>>(paramstateDefinition: StateDefinition<O, S>, paramproperties: string): (param0: StateHolder<O, S>) => boolean;
    constructor()
}