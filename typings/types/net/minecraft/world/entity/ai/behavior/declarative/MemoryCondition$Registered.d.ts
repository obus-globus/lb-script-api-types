import type { OptionalBox$Mu } from '../../../../../../../com/mojang/datafixers/kinds/OptionalBox$Mu.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Brain } from '../../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { MemoryAccessor } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/MemoryAccessor.d.ts'
import type { MemoryCondition } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/MemoryCondition.d.ts'
import type { MemoryModuleType } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemoryStatus } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
export class MemoryCondition$Registered<Value extends unknown> extends Record implements MemoryCondition<OptionalBox$Mu, Value> {
    constructor(memory: MemoryModuleType<Value>)
    // private memory: MemoryModuleType<Value>;
    condition(): MemoryStatus;
    createAccessor(brain: Brain<any>, value: Optional<Value>): MemoryAccessor<OptionalBox$Mu, Value>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    memory(): MemoryModuleType<Value>;
    toString(): string;
}