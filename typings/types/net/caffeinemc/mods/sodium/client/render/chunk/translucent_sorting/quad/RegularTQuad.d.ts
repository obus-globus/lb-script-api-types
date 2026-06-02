import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadFacing } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
export class RegularTQuad extends TQuad {
    static QUANTIZE_EPSILON: number;
    static VERTEX_EPSILON: number;
    static extentsEqual(paramarg0: number[], paramarg1: number[]): boolean;
    static extentsIntersect(paramarg0: number[], paramarg1: number[]): boolean;
    static extentsIntersect(paramarg0: TQuad, paramarg1: TQuad): boolean;
    static fromVertices(paramarg0: (Object | null)[], paramarg1: ModelQuadFacing, paramarg2: number): RegularTQuad;
    constructor(arg0: ModelQuadFacing, arg1: number)
    vertexPositions: number[];
    getVertexPositions(): number[];
    initVertexPositions(arg0: ChunkVertexEncoder$Vertex[], arg1: number): void;
}