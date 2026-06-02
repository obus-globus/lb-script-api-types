import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Creeper } from '../../../../../../net/minecraft/world/entity/monster/Creeper.d.ts'
export class SwellGoal extends Goal {
    constructor(creeper: Creeper)
    // private creeper: Creeper;
    // private target: LivingEntity;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}