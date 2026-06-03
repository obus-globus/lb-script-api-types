import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { ChunkSection } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { ChunkSectionType1_18 } from '../../../../../../../com/viaversion/viaversion/api/type/types/chunk/ChunkSectionType1_18.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkSectionType26_1 extends ChunkSectionType1_18 {
    constructor(arg0: number, arg1: number)
    read(arg0: ByteBuf): ChunkSection;
    serializedSize(arg0: Chunk): number;
    write(arg0: Ops, arg1: ChunkSection): void;
    write(arg0: ByteBuf, arg1: ChunkSection): void;
}