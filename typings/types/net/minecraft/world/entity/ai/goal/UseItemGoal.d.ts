import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class UseItemGoal<T extends Mob> extends Goal {
    constructor(mob: T, item: ItemStack, finishUsingSound: SoundEvent, canUseSelector: (param0: T) => kotlin.Boolean)
    // private canUseSelector: (param0: T) => kotlin.Boolean;
    // private finishUsingSound: SoundEvent;
    // private item: ItemStack;
    // private mob: T;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
}