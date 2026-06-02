import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Warden } from '../../../../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
export class SonicBoom extends Behavior<Warden> {
    static COOLDOWN: number;
    static DEFAULT_DURATION: number;
    static setCooldown(parambody: LivingEntity, paramcooldown: number): void;
    constructor()
    canStillUse(level: ServerLevel, body: Warden, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Warden): boolean;
    start(level: ServerLevel, body: Warden, timestamp: number): void;
    stop(level: ServerLevel, body: Warden, timestamp: number): void;
    tick(level: ServerLevel, body: Warden, timestamp: number): void;
}