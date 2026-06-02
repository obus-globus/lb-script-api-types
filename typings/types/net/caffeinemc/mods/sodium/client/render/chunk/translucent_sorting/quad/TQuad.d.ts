import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadFacing } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export abstract class TQuad extends Object {
    static QUANTIZE_EPSILON: number;
    static VERTEX_EPSILON: number;
    static extentsEqual(paramarg0: number[], paramarg1: number[]): boolean;
    static extentsIntersect(paramarg0: number[], paramarg1: number[]): boolean;
    static extentsIntersect(paramarg0: TQuad, paramarg1: TQuad): boolean;
    constructor(arg0: ModelQuadFacing, arg1: number)
    accurateDotProduct: number;
    accurateNormal: Vector3fc;
    center: Vector3fc;
    extents: number[];
    facing: ModelQuadFacing;
    readonly packedNormal: number;
    quantizedDotProduct: number;
    quantizedNormal: Vector3fc;
    // private computeQuantizedNormal(): void;
    extentsEqual(arg0: number[]): boolean;
    getAccurateDotProduct(): number;
    getAccurateNormal(): Vector3fc;
    getCenter(): Vector3fc;
    getExtents(): number[];
    getFacing(): ModelQuadFacing;
    getPackedNormal(): number;
    getQuadHash(): number;
    getQuantizedDotProduct(): number;
    getQuantizedNormal(): Vector3fc;
    getVertexPositions(): number[];
    initDotProduct(): void;
    initExtentsAndCenter(arg0: ChunkVertexEncoder$Vertex[]): number;
    useQuantizedFacing(): ModelQuadFacing;
}