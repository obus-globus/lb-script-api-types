import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { NearestVisibleLivingEntitySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/NearestVisibleLivingEntitySensor.d.ts'
export class FrogAttackablesSensor extends NearestVisibleLivingEntitySensor {
    static TARGET_DETECTION_DISTANCE: number;
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static rememberPositives<T extends unknown, U extends unknown>(paraminvocations: number, parampredicate: (param0: T, param1: U) => boolean): (param0: T, param1: U) => boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => boolean;
    constructor()
    getMemoryToSet(): MemoryModuleType<LivingEntity>;
    isMatchingEntity(level: ServerLevel, body: LivingEntity, mob: LivingEntity): boolean;
    // private isUnreachableAttackTarget(body: LivingEntity, mob: LivingEntity): boolean;
    requires(): MemoryModuleType<Object>[];
}