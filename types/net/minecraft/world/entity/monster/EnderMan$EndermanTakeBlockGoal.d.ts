import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { EnderMan } from '../../../../../net/minecraft/world/entity/monster/EnderMan.d.ts'
export class EnderMan$EndermanTakeBlockGoal extends Goal {
    constructor(enderman: EnderMan)
    // private enderman: EnderMan;
    canUse(): boolean;
    tick(): void;
}