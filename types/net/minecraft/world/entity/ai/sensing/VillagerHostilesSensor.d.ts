import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { NearestVisibleLivingEntitySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/NearestVisibleLivingEntitySensor.d.ts'
export class VillagerHostilesSensor extends NearestVisibleLivingEntitySensor {
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => kotlin.Boolean;
    constructor()
    getMemoryToSet(): MemoryModuleType<LivingEntity>;
    // private isClose(body: LivingEntity, mob: LivingEntity): boolean;
    // private isHostile(entity: LivingEntity): boolean;
    isMatchingEntity(level: ServerLevel, body: LivingEntity, mob: LivingEntity): boolean;
}