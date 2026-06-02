import type { DataPalette } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { DataPaletteImpl } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl.d.ts'
import type { PaletteType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/PaletteType.d.ts'
import type { PaletteType1_18 } from '../../../../../../../com/viaversion/viaversion/api/type/types/chunk/PaletteType1_18.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class PaletteType1_21_5 extends PaletteType1_18 {
    constructor(arg0: PaletteType, arg1: number)
    readValues(arg0: ByteBuf, arg1: number, arg2: DataPaletteImpl): void;
    serializedValuesSize(arg0: number): number;
    writeValues(arg0: ByteBuf, arg1: DataPalette, arg2: number): void;
}