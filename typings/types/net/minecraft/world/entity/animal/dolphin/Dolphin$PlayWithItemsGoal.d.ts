import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Dolphin$PlayWithItemsGoal extends Goal {
    constructor(null_: Dolphin$PlayWithItemsGoal)
    // private cooldown: number;
    canUse(): boolean;
    // private drop(itemStack: ItemStack): void;
    start(): void;
    stop(): void;
    tick(): void;
}