import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
export interface ChunkVertexEncoder extends Object{
    write(arg0: number, arg1: number, arg2: ChunkVertexEncoder$Vertex[], arg3: number): number;
}