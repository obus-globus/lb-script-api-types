import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SensorAccessor } from '../../../../../../net/caffeinemc/mods/lithium/mixin/ai/useless_sensors/SensorAccessor.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export abstract class Sensor<E extends LivingEntity> extends Object implements SensorAccessor {
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => boolean;
    constructor()
    constructor(scanRate: number)
    // private scanRate: number;
    // private timeToTick: number;
    doTick(level: ServerLevel, body: E): void;
    getLastSenseTime(): number;
    getSenseInterval(): number;
    randomlyDelayStart(randomSource: RandomSource): void;
    requires(): MemoryModuleType<Object>[];
    setLastSenseTime(arg0: number): void;
    tick(level: ServerLevel, body: E): void;
    // private updateTargetingConditionRanges(body: E): void;
}