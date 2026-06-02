import type { ChunkSection } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkSectionType1_13 extends Type<ChunkSection> {
    constructor()
    read(arg0: ByteBuf): ChunkSection;
    write(arg0: ByteBuf, arg1: ChunkSection): void;
}