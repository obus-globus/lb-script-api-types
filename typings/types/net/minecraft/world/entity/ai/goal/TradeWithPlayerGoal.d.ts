import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractVillager } from '../../../../../../net/minecraft/world/entity/npc/villager/AbstractVillager.d.ts'
export class TradeWithPlayerGoal extends Goal {
    constructor(mob: AbstractVillager)
    // private mob: AbstractVillager;
    canUse(): boolean;
    start(): void;
    stop(): void;
}