import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { Sensor } from '../../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TemptingSensor extends Sensor<PathfinderMob> {
    static forAnimal(): TemptingSensor;
    static isEntityAttackable(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityAttackableIgnoringLineOfSight(paramlevel: ServerLevel, parambody: LivingEntity, paramtarget: LivingEntity): boolean;
    static isEntityTargetable(paramlevel: ServerLevel, parambody: LivingEntity, paramentity: LivingEntity): boolean;
    static rememberPositives(paraminvocations: number, parampredicate: (param0: Object | null, param1: Object | null) => boolean): (param0: Object | null, param1: Object | null) => boolean;
    static wasEntityAttackableLastNTicks(parambody: LivingEntity, paramticks: number): (param0: ServerLevel, param1: LivingEntity) => boolean;
    constructor(tt: (param0: ItemStack) => boolean)
    // private temptations: (param0: PathfinderMob, param1: ItemStack) => boolean;
    doTick(arg0: ServerLevel, arg1: PathfinderMob): void;
    // private isTemptation(mob: PathfinderMob, itemStack: ItemStack): boolean;
    // private playerHoldingTemptation(mob: PathfinderMob, player: Player): boolean;
    requires(): MemoryModuleType<Object>[];
}