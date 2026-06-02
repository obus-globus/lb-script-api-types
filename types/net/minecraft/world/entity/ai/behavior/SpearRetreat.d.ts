import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class SpearRetreat extends Behavior<PathfinderMob> {
    static DEFAULT_DURATION: number;
    static MAX_COOLDOWN_DISTANCE: number;
    static MAX_FLEEING_TIME: number;
    static MIN_COOLDOWN_DISTANCE: number;
    constructor(speedModifierWhenRepositioning: number)
    // private speedModifierWhenRepositioning: number;
    // private ableToAttack(mob: PathfinderMob): boolean;
    canStillUse(level: ServerLevel, body: PathfinderMob, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: PathfinderMob): boolean;
    // private getTarget(mob: PathfinderMob): LivingEntity;
    start(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    stop(level: ServerLevel, body: PathfinderMob, timestamp: number): void;
    tick(level: ServerLevel, mob: PathfinderMob, timestamp: number): void;
}