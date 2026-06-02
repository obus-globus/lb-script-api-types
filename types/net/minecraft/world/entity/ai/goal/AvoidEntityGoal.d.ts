import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { PathNavigation } from '../../../../../../net/minecraft/world/entity/ai/navigation/PathNavigation.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class AvoidEntityGoal<T extends LivingEntity> extends Goal {
    constructor(mob: PathfinderMob, avoidClass: Class<T>, avoidPredicate: (param0: LivingEntity) => kotlin.Boolean, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number, predicateOnAvoidEntity: (param0: LivingEntity) => kotlin.Boolean)
    constructor(mob: PathfinderMob, avoidClass: Class<T>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number)
    constructor(mob: PathfinderMob, avoidClass: Class<T>, maxDist: number, walkSpeedModifier: number, sprintSpeedModifier: number, predicateOnAvoidEntity: (param0: LivingEntity) => kotlin.Boolean)
    // private avoidClass: Class<T>;
    // private avoidEntityTargeting: TargetingConditions;
    // private avoidPredicate: (param0: LivingEntity) => kotlin.Boolean;
    // private maxDist: number;
    // private mob: PathfinderMob;
    // private path: Path;
    // private pathNav: PathNavigation;
    // private predicateOnAvoidEntity: (param0: LivingEntity) => kotlin.Boolean;
    // private sprintSpeedModifier: number;
    // private toAvoid: T;
    // private walkSpeedModifier: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}