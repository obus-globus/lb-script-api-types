import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TamableAnimal } from '../../../../../../net/minecraft/world/entity/TamableAnimal.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
export class FollowOwnerGoal extends Goal {
    constructor(tamable: TamableAnimal, speedModifier: number, startDistance: number, stopDistance: number)
    // private navigation: PathNavigation;
    // private oldWaterCost: number;
    // private owner: LivingEntity;
    // private speedModifier: number;
    // private startDistance: number;
    // private stopDistance: number;
    // private tamable: TamableAnimal;
    // private timeToRecalcPath: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}