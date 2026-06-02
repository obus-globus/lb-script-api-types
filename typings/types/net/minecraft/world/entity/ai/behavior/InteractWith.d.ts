import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class InteractWith extends Object {
    static of(paramtype: EntityType<Object>, paraminteractionRange: number, paramselfFilter: (param0: Object | null) => kotlin.Boolean, paramtargetFilter: (param0: Object | null) => kotlin.Boolean, paraminteractionTarget: MemoryModuleType<Object>, paramspeedModifier: number, paramstopDistance: number): BehaviorControl<Object>;
    static of(paramtype: EntityType<Object>, paraminteractionRange: number, paraminteractionTarget: MemoryModuleType<Object>, paramspeedModifier: number, paramstopDistance: number): BehaviorControl<LivingEntity>;
    constructor()
}