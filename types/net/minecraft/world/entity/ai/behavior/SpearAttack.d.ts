import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class SpearAttack extends Behavior<PathfinderMob> {
    static DEFAULT_DURATION: number;
    static MAX_REPOSITION_DISTANCE: number;
    static MIN_REPOSITION_DISTANCE: number;
    constructor(speedModifierWhenCharging: number, speedModifierWhenRepositioning: number, targetInRangeRadius: number)
    // private speedModifierWhenCharging: number;
    // private speedModifierWhenRepositioning: number;
    // private targetInRangeRadiusSq: number;
    // private ableToAttack(mob: PathfinderMob): boolean;
    canStillUse(level: ServerLevel, body: PathfinderMob, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: PathfinderMob): boolean;
    // private getKineticWeaponUseDuration(mob: PathfinderMob): number;
    // private getTarget(mob: PathfinderMob): LivingEntity;
    start(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    stop(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    tick(level: ServerLevel, mob: PathfinderMob, timestamp: number): void;
    timedOut(timestamp: number): boolean;
}