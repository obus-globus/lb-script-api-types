import type { DataPalette } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { PaletteTypeBase } from '../../../../../../../com/viaversion/viaversion/api/type/types/chunk/PaletteTypeBase.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ChunkBiomesType1_19_4 extends Type<DataPalette[]> {
    constructor(arg0: number, arg1: PaletteTypeBase)
    constructor(arg0: number, arg1: number)
    // private paletteType: PaletteTypeBase;
    // private ySectionCount: number;
    read(arg0: ByteBuf): DataPalette[];
    write(arg0: ByteBuf, arg1: DataPalette[]): void;
}