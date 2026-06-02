import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ChunkSectionType1_18 } from '../../../../../../../com/viaversion/viaversion/api/type/types/chunk/ChunkSectionType1_18.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkType1_18 extends Type<Chunk> {
    constructor(arg0: number, arg1: number, arg2: number)
    // private sectionType: ChunkSectionType1_18;
    // private ySectionCount: number;
    read(arg0: ByteBuf): Chunk;
    write(arg0: ByteBuf, arg1: Chunk): void;
}