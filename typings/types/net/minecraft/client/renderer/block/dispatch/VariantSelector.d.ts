import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class VariantSelector extends Object {
    static predicate(paramstateDefinition: StateDefinition<Object, Object>, paramproperties: string): (param0: Object | null) => kotlin.Boolean;
    constructor()
}