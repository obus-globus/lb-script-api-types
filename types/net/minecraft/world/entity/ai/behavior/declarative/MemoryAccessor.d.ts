import type { App } from '../../../../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { K1 } from '../../../../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Brain } from '../../../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { MemoryModuleType } from '../../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class MemoryAccessor<F extends K1, Value extends Object | number | string | boolean> extends Object {
    constructor(brain: Brain<Object>, memoryType: MemoryModuleType<Value>, value: App<F, Value>)
    // private brain: Brain<Object>;
    // private memoryType: MemoryModuleType<Value>;
    // private value: App<F, Value>;
    erase(): void;
    set(value: Value): void;
    setOrErase(value: Optional<Value>): void;
    setWithExpiry(value: Value, timeToLive: number): void;
    value(): App<F, Value>;
}