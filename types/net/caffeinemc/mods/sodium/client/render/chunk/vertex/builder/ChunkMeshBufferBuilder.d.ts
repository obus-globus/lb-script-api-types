import type { MemorySegment } from '../../../../../../../../../java/lang/foreign/MemorySegment.d.ts'
import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Material } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { ChunkVertexType } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
export class ChunkMeshBufferBuilder extends Object {
    constructor(arg0: ChunkVertexType, arg1: number)
    // private buffer: MemorySegment;
    // private encoder: ChunkVertexEncoder;
    // private initialCapacity: number;
    // private sectionIndex: number;
    // private stride: number;
    // private vertexCapacity: number;
    // private vertexCount: number;
    count(): number;
    destroy(): void;
    // private ensureCapacity(arg0: number): void;
    // private grow(arg0: number): void;
    isEmpty(): boolean;
    push(arg0: ChunkVertexEncoder$Vertex[], arg1: number): void;
    push(arg0: ChunkVertexEncoder$Vertex[], arg1: Material): void;
    // private reallocate(arg0: number): void;
    slice(): ByteBuffer;
    start(arg0: number): void;
    writeExternal(arg0: ByteBuffer, arg1: number, arg2: ChunkVertexEncoder$Vertex[], arg3: Material): void;
}