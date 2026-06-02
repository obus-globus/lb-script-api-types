import type { Pair } from '../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { GateBehavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/GateBehavior.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemoryStatus } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
export class RunOne<E extends LivingEntity> extends GateBehavior<E> {
    constructor(weightedBehaviors: Pair<BehaviorControl<E>, number>[])
    constructor(entryCondition: Map<MemoryModuleType<Object>, MemoryStatus>, weightedBehaviors: Pair<BehaviorControl<E>, number>[])
}