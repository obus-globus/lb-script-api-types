import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExpirableValue } from '../../../../../../net/minecraft/world/entity/ai/memory/ExpirableValue.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class MemoryMap$Value<U extends unknown> extends Record {
    static createUnchecked<U extends unknown>(paramtype: MemoryModuleType<U>, paramvalue: ExpirableValue<Object>): MemoryMap$Value<U>;
    constructor(type: MemoryModuleType<U>, value: ExpirableValue<U>)
    // private type: MemoryModuleType<U>;
    // private value: ExpirableValue<U>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MemoryModuleType<U>;
    value(): ExpirableValue<U>;
}