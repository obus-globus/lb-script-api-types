import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { NearestVisibleLivingEntities } from '../../../../../../net/minecraft/world/entity/ai/memory/NearestVisibleLivingEntities.d.ts'
import type { AdultSensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/AdultSensor.d.ts'
export class AdultSensorAnyType extends AdultSensor {
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => kotlin.Boolean;
    constructor()
    setNearestVisibleAdult(body: LivingEntity, visibleLivingEntities: NearestVisibleLivingEntities): void;
}