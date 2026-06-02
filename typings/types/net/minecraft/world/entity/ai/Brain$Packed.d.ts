import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MemoryMap$Value } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryMap$Value.d.ts'
export class Brain$Packed extends Record {
    static CODEC: Codec<Brain$Packed>;
    static EMPTY: Brain$Packed;
    constructor(memories: MemoryMap$Value<Object>[])
    // private memories: MemoryMap$Value<Object>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    memories(): MemoryMap$Value<Object>[];
    toString(): string;
}