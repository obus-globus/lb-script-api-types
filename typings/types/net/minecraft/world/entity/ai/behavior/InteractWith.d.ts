import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class InteractWith extends Object {
    static of(paramtype: EntityType<LivingEntity>, paraminteractionRange: number, paramselfFilter: (param0: LivingEntity | null) => boolean, paramtargetFilter: (param0: LivingEntity | null) => boolean, paraminteractionTarget: MemoryModuleType<LivingEntity>, paramspeedModifier: number, paramstopDistance: number): BehaviorControl<LivingEntity>;
    static of(paramtype: EntityType<LivingEntity>, paraminteractionRange: number, paraminteractionTarget: MemoryModuleType<LivingEntity>, paramspeedModifier: number, paramstopDistance: number): BehaviorControl<LivingEntity>;
    constructor()
}