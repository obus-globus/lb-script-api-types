import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
export class SectionBufferBuilderPack extends Object implements AutoCloseable {
    static TOTAL_BUFFERS_SIZE: number;
    constructor()
    // private buffers: Map<ChunkSectionLayer, ByteBufferBuilder>;
    buffer(layer: ChunkSectionLayer): ByteBufferBuilder;
    clearAll(): void;
    close(): void;
    discardAll(): void;
}