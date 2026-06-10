import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { TemptGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/TemptGoal.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TemptGoal$ForNonPathfinders extends TemptGoal {
    constructor(mob: Mob, speedModifier: number, items: (param0: ItemStack) => boolean, canScare: boolean, stopDistance: number)
    navigateTowards(player: Player): void;
    stopNavigation(): void;
}