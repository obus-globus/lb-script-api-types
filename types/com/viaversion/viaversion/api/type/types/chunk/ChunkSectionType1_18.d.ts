import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { ChunkSection } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { PaletteTypeBase } from '../../../../../../../com/viaversion/viaversion/api/type/types/chunk/PaletteTypeBase.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkSectionType1_18 extends Type<ChunkSection> {
    constructor(arg0: PaletteTypeBase, arg1: PaletteTypeBase)
    constructor(arg0: number, arg1: number)
    // private biomePaletteType: PaletteTypeBase;
    // private blockPaletteType: PaletteTypeBase;
    read(arg0: ByteBuf): ChunkSection;
    serializedSize(arg0: Chunk): number;
    write(arg0: ByteBuf, arg1: ChunkSection): void;
}