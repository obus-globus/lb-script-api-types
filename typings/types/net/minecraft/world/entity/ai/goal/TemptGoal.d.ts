import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TemptGoal extends Goal {
    constructor(mob: PathfinderMob, speedModifier: number, items: (param0: ItemStack) => boolean, canScare: boolean)
    constructor(mob: PathfinderMob, speedModifier: number, items: (param0: ItemStack) => boolean, canScare: boolean, stopDistance: number)
    // private calmDown: number;
    // private canScare: boolean;
    // private isRunning: boolean;
    // private items: (param0: ItemStack) => boolean;
    // private mob: Mob;
    // private pRotX: number;
    // private pRotY: number;
    // private player: Player;
    // private px: number;
    // private py: number;
    // private pz: number;
    // private speedModifier: number;
    // private stopDistance: number;
    // private targetingConditions: TargetingConditions;
    canContinueToUse(): boolean;
    canScare(): boolean;
    canUse(): boolean;
    isRunning(): boolean;
    navigateTowards(player: Player): void;
    // private shouldFollow(player: LivingEntity): boolean;
    start(): void;
    stop(): void;
    stopNavigation(): void;
    tick(): void;
}