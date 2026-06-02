import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlobalPos } from '../../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class ValidateNearbyPoi extends Object {
    static create(parampoiType: (param0: Object | null) => kotlin.Boolean, parammemoryType: MemoryModuleType<GlobalPos>): BehaviorControl<LivingEntity>;
    constructor()
}