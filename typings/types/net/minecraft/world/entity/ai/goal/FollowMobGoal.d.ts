import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
export class FollowMobGoal extends Goal {
    constructor(mob: Mob, speedModifier: number, stopDistance: number, areaSize: number)
    // private areaSize: number;
    // private followPredicate: (param0: Mob) => boolean;
    // private followingMob: Mob;
    // private mob: Mob;
    // private navigation: PathNavigation;
    // private oldWaterCost: number;
    // private speedModifier: number;
    // private stopDistance: number;
    // private timeToRecalcPath: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}