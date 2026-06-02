import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { GlVertexFormat } from '../../../../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexFormat.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
import type { ChunkVertexType } from '../../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
export class CompactChunkVertex extends Object implements ChunkVertexType {
    static POSITION_MAX_VALUE: number;
    static STRIDE: number;
    static TEXTURE_MAX_VALUE: number;
    static VERTEX_FORMAT: GlVertexFormat;
    constructor()
    getEncoder(): ChunkVertexEncoder;
    getVertexFormat(): GlVertexFormat;
}