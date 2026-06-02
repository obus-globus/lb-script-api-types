import type { LookAtPlayerGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/LookAtPlayerGoal.d.ts'
import type { AbstractVillager } from '../../../../../../net/minecraft/world/entity/npc/villager/AbstractVillager.d.ts'
export class LookAtTradingPlayerGoal extends LookAtPlayerGoal {
    static DEFAULT_PROBABILITY: number;
    constructor(villager: AbstractVillager)
    // private villager: AbstractVillager;
    canUse(): boolean;
}