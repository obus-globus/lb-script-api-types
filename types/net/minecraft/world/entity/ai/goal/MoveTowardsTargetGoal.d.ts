import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class MoveTowardsTargetGoal extends Goal {
    constructor(mob: PathfinderMob, speedModifier: number, within: number)
    // private mob: PathfinderMob;
    // private speedModifier: number;
    // private target: LivingEntity;
    // private wantedX: number;
    // private wantedY: number;
    // private wantedZ: number;
    // private within: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
}