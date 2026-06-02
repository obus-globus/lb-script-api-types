import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { EnderMan } from '../../../../../net/minecraft/world/entity/monster/EnderMan.d.ts'
export class EnderMan$EndermanFreezeWhenLookedAt extends Goal {
    constructor(enderman: EnderMan)
    // private enderman: EnderMan;
    // private target: LivingEntity;
    canUse(): boolean;
    start(): void;
    tick(): void;
}