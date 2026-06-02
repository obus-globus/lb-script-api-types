import type { DataPalette } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { DataPaletteImpl } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl.d.ts'
import type { PaletteType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/PaletteType.d.ts'
import type { PaletteTypeBase } from '../../../../../../../com/viaversion/viaversion/api/type/types/chunk/PaletteTypeBase.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class PaletteType1_18 extends PaletteTypeBase {
    constructor(arg0: PaletteType, arg1: number)
    // private globalPaletteBits: number;
    // private type: PaletteType;
    // private bitsPerValue(arg0: number): number;
    read(arg0: ByteBuf): DataPalette;
    readValues(arg0: ByteBuf, arg1: number, arg2: DataPaletteImpl): void;
    serializedSize(arg0: DataPalette): number;
    serializedValuesSize(arg0: number): number;
    write(arg0: ByteBuf, arg1: DataPalette): void;
    writeValues(arg0: ByteBuf, arg1: DataPalette, arg2: number): void;
}