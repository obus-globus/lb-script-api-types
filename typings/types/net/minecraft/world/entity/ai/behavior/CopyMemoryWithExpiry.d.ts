import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class CopyMemoryWithExpiry extends Object {
    static create<E extends LivingEntity, T extends unknown>(paramcopyIfTrue: (param0: E) => boolean, paramsourceMemory: MemoryModuleType<T>, paramtargetMemory: MemoryModuleType<T>, paramdurationOfCopy: UniformInt): BehaviorControl<E>;
    constructor()
}