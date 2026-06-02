import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { CrossbowAttack$CrossbowState } from '../../../../../../net/minecraft/world/entity/ai/behavior/CrossbowAttack$CrossbowState.d.ts'
import type { CrossbowAttackMob } from '../../../../../../net/minecraft/world/entity/monster/CrossbowAttackMob.d.ts'
export class CrossbowAttack<E extends Mob & CrossbowAttackMob, T extends LivingEntity> extends Behavior<E> {
    static DEFAULT_DURATION: number;
    constructor()
    // private attackDelay: number;
    // private crossbowState: CrossbowAttack$CrossbowState;
    canStillUse(level: ServerLevel, body: E, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: E): boolean;
    // private crossbowAttack(body: E, target: LivingEntity): void;
    // private lookAtTarget(body: Mob, target: LivingEntity): void;
    stop(level: ServerLevel, body: E, timestamp: number): void;
    tick(level: ServerLevel, body: E, timestamp: number): void;
}