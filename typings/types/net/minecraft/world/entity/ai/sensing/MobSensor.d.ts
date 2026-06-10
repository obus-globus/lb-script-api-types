import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { Sensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
export class MobSensor<T extends LivingEntity> extends Sensor<T> {
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => boolean;
    constructor(scanRate: number, mobTest: (param0: T, param1: LivingEntity) => boolean, readyTest: (param0: T) => boolean, toSet: MemoryModuleType<boolean>, memoryTimeToLive: number)
    // private memoryTimeToLive: number;
    // private mobTest: (param0: T, param1: LivingEntity) => boolean;
    // private readyTest: (param0: T) => boolean;
    // private toSet: MemoryModuleType<boolean>;
    checkForMobsNearby(body: T): void;
    clearMemory(body: T): void;
    doTick(level: ServerLevel, body: T): void;
    mobDetected(body: T): void;
    requires(): MemoryModuleType<Object>[];
}