import type { Const$Mu } from '../../../../../../../com/mojang/datafixers/kinds/Const$Mu.d.ts'
import type { Unit } from '../../../../../../../com/mojang/datafixers/util/Unit.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Brain } from '../../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { MemoryAccessor } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/MemoryAccessor.d.ts'
import type { MemoryCondition } from '../../../../../../../net/minecraft/world/entity/ai/behavior/declarative/MemoryCondition.d.ts'
import type { MemoryModuleType } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { MemoryStatus } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryStatus.d.ts'
export class MemoryCondition$Absent<Value extends Object | number | string | boolean> extends Record implements MemoryCondition<Const$Mu<Unit>, Value> {
    constructor(memory: MemoryModuleType<Value>)
    // private memory: MemoryModuleType<Value>;
    condition(): MemoryStatus;
    createAccessor(brain: Brain<any>, value: Optional<Value>): MemoryAccessor<Const$Mu<Unit>, Value>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    memory(): MemoryModuleType<Value>;
    toString(): string;
}