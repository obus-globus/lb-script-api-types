import type { Environment } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Environment.d.ts'
import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkType1_13 extends Type<Chunk> {
    static forEnvironment(paramarg0: Environment): ChunkType1_13;
    constructor(arg0: boolean)
    // private hasSkyLight: boolean;
    read(arg0: ByteBuf): Chunk;
    write(arg0: ByteBuf, arg1: Chunk): void;
}