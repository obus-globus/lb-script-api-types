import type { DataPaletteImpl } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl.d.ts'
import type { DataPaletteImpl$ChunkData } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl$ChunkData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DataPaletteImpl$SingleChunkData extends Object implements DataPaletteImpl$ChunkData {
    constructor(null_: DataPaletteImpl, arg1: number)
    // private size: number;
    get(arg0: number): number;
    set(arg0: number, arg1: number): void;
    size(): number;
}