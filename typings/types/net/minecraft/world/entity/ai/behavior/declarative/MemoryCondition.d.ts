import type { K1 } from '../../../../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Brain } from '../../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { MemoryAccessor } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/MemoryAccessor.d.ts'
import type { MemoryModuleType } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemoryStatus } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
export interface MemoryCondition<F extends K1, Value extends Object | number | string | boolean> extends Object{
    condition(): MemoryStatus;
    createAccessor(brain: Brain<Object>, value: Optional<Value>): MemoryAccessor<F, Value>;
    memory(): MemoryModuleType<Value>;
}