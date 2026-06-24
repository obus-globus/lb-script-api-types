import type { VertexFormat } from '../../../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
export interface ChunkVertexType extends Object{
    getEncoder(): ChunkVertexEncoder;
    getVertexFormat(): VertexFormat;
}