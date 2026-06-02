import type { DataPalette } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
export abstract class PaletteTypeBase extends Type<DataPalette> {
    constructor()
    serializedSize(arg0: DataPalette): number;
}