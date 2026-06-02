import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BedrockDataPalette } from '../../../../../../net/raphimc/viabedrock/api/chunk/datapalette/BedrockDataPalette.d.ts'
export class DataPaletteType extends Type<BedrockDataPalette> {
    constructor(arg0: boolean)
    // private allowPersistentIds: boolean;
    read(arg0: ByteBuf): BedrockDataPalette;
    write(arg0: ByteBuf, arg1: BedrockDataPalette): void;
}