import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Path } from '../../../../../../net/minecraft/world/level/pathfinder/Path.d.ts'
export class MeleeAttackGoal extends Goal {
    constructor(mob: PathfinderMob, speedModifier: number, followingTargetEvenIfNotSeen: boolean)
    // private attackInterval: number;
    // private followingTargetEvenIfNotSeen: boolean;
    // private lastCanUseCheck: number;
    // private mob: PathfinderMob;
    // private path: Path;
    // private pathedTargetX: number;
    // private pathedTargetY: number;
    // private pathedTargetZ: number;
    // private speedModifier: number;
    // private ticksUntilNextAttack: number;
    // private ticksUntilNextPathRecalculation: number;
    canContinueToUse(): boolean;
    canPerformAttack(target: LivingEntity): boolean;
    canUse(): boolean;
    checkAndPerformAttack(target: LivingEntity): void;
    getAttackInterval(): number;
    getTicksUntilNextAttack(): number;
    isTimeToAttack(): boolean;
    requiresUpdateEveryTick(): boolean;
    resetAttackCooldown(): void;
    start(): void;
    stop(): void;
    tick(): void;
}