import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class ForceUnmount extends Behavior<LivingEntity> {
    static DEFAULT_DURATION: number;
    constructor()
    checkExtraStartConditions(level: ServerLevel, body: LivingEntity): boolean;
    start(level: ServerLevel, body: LivingEntity, timestamp: number): void;
}