import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { TemptGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/TemptGoal.d.ts'
import type { Ocelot } from '../../../../../../net/minecraft/world/entity/animal/feline/Ocelot.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Ocelot$OcelotTemptGoal extends TemptGoal {
    constructor(ocelot: Ocelot, speedModifier: number, items: (param0: ItemStack) => kotlin.Boolean, canScare: boolean)
    // private ocelot: Ocelot;
    canScare(): boolean;
}