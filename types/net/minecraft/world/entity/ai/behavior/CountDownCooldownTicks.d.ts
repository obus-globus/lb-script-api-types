import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class CountDownCooldownTicks extends Behavior<LivingEntity> {
    static DEFAULT_DURATION: number;
    constructor(cooldownTicks: MemoryModuleType<number>)
    // private cooldownTicks: MemoryModuleType<number>;
    canStillUse(level: ServerLevel, body: LivingEntity, timestamp: number): boolean;
    // private getCooldownTickMemory(body: LivingEntity): Optional<number>;
    stop(level: ServerLevel, body: LivingEntity, timestamp: number): void;
    tick(level: ServerLevel, body: LivingEntity, timestamp: number): void;
    timedOut(timestamp: number): boolean;
}