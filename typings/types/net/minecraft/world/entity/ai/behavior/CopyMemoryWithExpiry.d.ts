import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class CopyMemoryWithExpiry extends Object {
    static create(paramcopyIfTrue: (param0: LivingEntity | null) => boolean, paramsourceMemory: MemoryModuleType<Object>, paramtargetMemory: MemoryModuleType<Object>, paramdurationOfCopy: UniformInt): BehaviorControl<LivingEntity>;
    constructor()
}