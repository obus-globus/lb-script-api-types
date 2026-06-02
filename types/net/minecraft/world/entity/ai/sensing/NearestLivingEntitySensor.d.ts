import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { Sensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
export class NearestLivingEntitySensor<T extends LivingEntity> extends Sensor<T> {
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => kotlin.Boolean;
    constructor()
    doTick(level: ServerLevel, body: T): void;
    requires(): MemoryModuleType<Object>[];
}