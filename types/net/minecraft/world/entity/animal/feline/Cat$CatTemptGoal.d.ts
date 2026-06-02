import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { TemptGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/TemptGoal.d.ts'
import type { Cat } from '../../../../../../net/minecraft/world/entity/animal/feline/Cat.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Cat$CatTemptGoal extends TemptGoal {
    constructor(mob: Cat, speedModifier: number, items: (param0: ItemStack) => kotlin.Boolean, canScare: boolean)
    // private cat: Cat;
    // private selectedPlayer: Player;
    canScare(): boolean;
    canUse(): boolean;
    tick(): void;
}