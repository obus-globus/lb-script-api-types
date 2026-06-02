import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { ChunkVertexExtension } from '../../../../../../net/irisshaders/iris/vertices/sodium/terrain/ChunkVertexExtension.d.ts'
import type { Vector3f } from '../../../../../../org/joml/Vector3f.d.ts'
import type { Vector4f } from '../../../../../../org/joml/Vector4f.d.ts'
export class XHFPTerrainVertex extends Object implements ChunkVertexEncoder {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
    // private blockIdOffset: number;
    // private midBlockOffset: number;
    // private midUvOffset: number;
    // private normal: Vector3f;
    // private normalOffset: number;
    // private scratchValues: Vector3f[];
    // private stride: number;
    // private tangent: Vector4f;
    // private tangentSet: Vector3f;
    // private computeTangentForQuad(arg0: Vector3f, arg1: ChunkVertexEncoder$Vertex[]): number;
    // private packBlockId(arg0: ChunkVertexExtension): number;
    write(arg0: number, arg1: number, arg2: ChunkVertexEncoder$Vertex[], arg3: number): number;
}