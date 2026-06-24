import type { VertexFormat } from '../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
import type { ChunkVertexType } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
export class XHFPModelVertexType extends Object implements ChunkVertexType {
    static encodeOld(paramarg0: number, paramarg1: number): number;
    constructor(arg0: VertexFormat, arg1: number, arg2: number, arg3: number, arg4: number)
    // private blockIdOffset: number;
    // private format: VertexFormat;
    // private midBlockOffset: number;
    // private midUvOffset: number;
    // private normalOffset: number;
    getEncoder(): ChunkVertexEncoder;
    getVertexFormat(): VertexFormat;
}