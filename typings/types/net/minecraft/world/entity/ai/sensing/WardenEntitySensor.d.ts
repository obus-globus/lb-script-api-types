import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { NearestLivingEntitySensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/NearestLivingEntitySensor.d.ts'
import type { Warden } from '../../../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
export class WardenEntitySensor extends NearestLivingEntitySensor<Warden> {
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static rememberPositives(paraminvocations: number, parampredicate: (param0: Object | null, param1: Object | null) => boolean): (param0: Object | null, param1: Object | null) => boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => boolean;
    constructor()
    doTick(level: ServerLevel, body: Warden): void;
    requires(): MemoryModuleType<Object>[];
}