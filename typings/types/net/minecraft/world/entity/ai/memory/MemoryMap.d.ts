import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MemoryMap$Value } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryMap$Value.d.ts'
export class MemoryMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static CODEC: Codec<MemoryMap$Value<Object>[]>;
    static EMPTY: MemoryMap$Value<Object>[];
    static of(parammemories: Stream<MemoryMap$Value<Object>>): MemoryMap$Value<Object>[];
}