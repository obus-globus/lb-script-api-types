import type { ImmutableMap$Builder } from '../../../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExpirableValue } from '../../../../../../net/minecraft/world/entity/ai/memory/ExpirableValue.d.ts'
import type { MemoryMap$Value } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryMap$Value.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class MemoryMap$Builder extends Object {
    constructor()
    // private builder: ImmutableMap$Builder<MemoryModuleType<Object>, ExpirableValue<Object>>;
    add<U extends unknown>(type: MemoryModuleType<U>, value: ExpirableValue<U>): MemoryMap$Builder;
    build(): MemoryMap$Value<Object>[];
}