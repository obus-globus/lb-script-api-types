import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class EraseMemoryIf extends Object {
    static create(parampredicate: (param0: Object | null) => kotlin.Boolean, parammemoryType: MemoryModuleType<Object>): BehaviorControl<Object>;
    constructor()
}