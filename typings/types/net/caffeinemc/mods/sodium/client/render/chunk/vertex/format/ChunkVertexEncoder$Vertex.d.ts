import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ChunkVertexExtension } from '../../../../../../../../../net/irisshaders/iris/vertices/sodium/terrain/ChunkVertexExtension.d.ts'
export class ChunkVertexEncoder$Vertex extends Object implements ChunkVertexExtension {
    static copyVertexTo(paramarg0: ChunkVertexEncoder$Vertex, paramarg1: ChunkVertexEncoder$Vertex): void;
    static uninitializedQuad(): ChunkVertexEncoder$Vertex[];
    static writeVertex(paramarg0: ChunkVertexEncoder$Vertex, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: number): void;
    constructor()
    ao: number;
    readonly blockEmission: number;
    readonly blockId: number;
    color: number;
    // private ignoresMidBlock: boolean;
    light: number;
    readonly localPosX: number;
    readonly localPosY: number;
    readonly localPosZ: number;
    readonly renderType: number;
    u: number;
    v: number;
    x: number;
    y: number;
    z: number;
    getBlockEmission(): number;
    getBlockId(): number;
    getLocalPosX(): number;
    getLocalPosY(): number;
    getLocalPosZ(): number;
    getRenderType(): number;
    ignoreMidBlock(): boolean;
    iris$copyData(arg0: ChunkVertexExtension): void;
    iris$ignoresMidBlock(arg0: boolean): void;
    iris$setData(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
}