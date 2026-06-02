import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { GlVertexFormat } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexFormat.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
export interface ChunkVertexType extends Object{
    getEncoder(): ChunkVertexEncoder;
    getVertexFormat(): GlVertexFormat;
}