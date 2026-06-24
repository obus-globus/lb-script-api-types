import type { VertexFormat } from '../../../../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
import type { ChunkVertexType } from '../../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
export class CompactChunkVertex extends Object implements ChunkVertexType {
    static POSITION_MAX_VALUE: number;
    static STRIDE: number;
    static TEXTURE_MAX_VALUE: number;
    static VERTEX_FORMAT: VertexFormat;
    constructor()
    getEncoder(): ChunkVertexEncoder;
    getVertexFormat(): VertexFormat;
}