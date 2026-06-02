import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class BecomePassiveIfMemoryPresent extends Object {
    static create(parampacifyingMemory: MemoryModuleType<Object>, parampacifyDuration: number): BehaviorControl<LivingEntity>;
    constructor()
}