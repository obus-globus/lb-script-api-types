import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
export class SleepInBed extends Behavior<LivingEntity> {
    static COOLDOWN_AFTER_BEING_WOKEN: number;
    static DEFAULT_DURATION: number;
    constructor()
    // private nextOkStartTime: number;
    canStillUse(level: ServerLevel, body: LivingEntity, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: LivingEntity): boolean;
    start(level: ServerLevel, body: LivingEntity, timestamp: number): void;
    stop(level: ServerLevel, body: LivingEntity, timestamp: number): void;
    timedOut(timestamp: number): boolean;
}