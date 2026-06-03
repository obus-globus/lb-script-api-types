import type { Environment } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Environment.d.ts'
import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkType1_8 extends Type<Chunk> {
    static deserialize(paramarg0: number, paramarg1: number, paramarg2: boolean, paramarg3: boolean, paramarg4: number, paramarg5: number[]): Chunk;
    static forEnvironment(paramarg0: Environment): ChunkType1_8;
    static serialize(paramarg0: Chunk): number[];
    constructor(arg0: boolean)
    // private hasSkyLight: boolean;
    read(arg0: ByteBuf): Chunk;
    write(arg0: Ops, arg1: Chunk): void;
    write(arg0: ByteBuf, arg1: Chunk): void;
}