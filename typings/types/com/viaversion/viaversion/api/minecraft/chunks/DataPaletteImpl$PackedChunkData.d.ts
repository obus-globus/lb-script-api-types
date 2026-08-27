import type { DataPaletteImpl } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl.d.ts'
import type { DataPaletteImpl$ChunkData } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl$ChunkData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DataPaletteImpl$PackedChunkData extends Object implements DataPaletteImpl$ChunkData {
    private constructor(null_: DataPaletteImpl, arg1: number[], arg2: number, arg3: number, arg4: number)
    // private bitsPerValue: number;
    // private data: number[];
    // private maxEntryValue: number;
    // private size: number;
    // private valuesPerLong: number;
    // private extractData(): DataPaletteImpl$ChunkData;
    get(arg0: number): number;
    packInto(arg0: number[], arg1: number): void;
    set(arg0: number, arg1: number): void;
    size(): number;
}