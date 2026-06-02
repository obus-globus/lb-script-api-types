import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlVertexFormat } from '../../../../../../net/caffeinemc/mods/sodium/client/gl/attribute/GlVertexFormat.d.ts'
import type { ChunkVertexEncoder } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexEncoder.d.ts'
import type { ChunkVertexType } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
export class XHFPModelVertexType extends Object implements ChunkVertexType {
    static encodeOld(paramarg0: number, paramarg1: number): number;
    constructor(arg0: GlVertexFormat, arg1: number, arg2: number, arg3: number, arg4: number)
    // private blockIdOffset: number;
    // private format: GlVertexFormat;
    // private midBlockOffset: number;
    // private midUvOffset: number;
    // private normalOffset: number;
    getEncoder(): ChunkVertexEncoder;
    getVertexFormat(): GlVertexFormat;
}