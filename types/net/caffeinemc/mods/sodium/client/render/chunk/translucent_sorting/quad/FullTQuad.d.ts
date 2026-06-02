import type { ByteBuffer } from '../../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadFacing } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/properties/ModelQuadFacing.d.ts'
import type { RegularTQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/RegularTQuad.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { ChunkMeshBufferBuilder } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/builder/ChunkMeshBufferBuilder.d.ts'
import type { ChunkVertexEncoder$Vertex } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder$Vertex.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class FullTQuad extends RegularTQuad {
    static QUANTIZE_EPSILON: number;
    static VERTEX_EPSILON: number;
    static extentsEqual(paramarg0: number[], paramarg1: number[]): boolean;
    static extentsIntersect(paramarg0: number[], paramarg1: number[]): boolean;
    static extentsIntersect(paramarg0: TQuad, paramarg1: TQuad): boolean;
    static fromVertices(paramarg0: (Object | null)[], paramarg1: ModelQuadFacing, paramarg2: number): FullTQuad;
    static fromVertices(paramarg0: (Object | null)[], paramarg1: ModelQuadFacing, paramarg2: number): RegularTQuad;
    static splittingCopy(paramarg0: FullTQuad): FullTQuad;
    constructor(arg0: ModelQuadFacing, arg1: number)
    // private hasUpdatedVertices: boolean;
    // private normalIsVeryAccurate: boolean;
    readonly sameVertexMap: number;
    readonly vertices: ChunkVertexEncoder$Vertex[];
    readonly writeToIndex: number;
    getSameVertexMap(): number;
    getUniqueVertexMap(): number;
    getVertexPositions(): number[];
    getVertices(): ChunkVertexEncoder$Vertex[];
    getVeryAccurateNormal(): Vector3fc;
    // private initVertices(arg0: ChunkVertexEncoder$Vertex[]): void;
    isInvalid(): boolean;
    setNoWrite(): void;
    setWriteToIndex(arg0: number): void;
    triggerAndSetUpdatedVertices(): boolean;
    updateSplitQuadAfterVertexModification(): void;
    writeToBuffer(arg0: ChunkMeshBufferBuilder, arg1: ByteBuffer): void;
}