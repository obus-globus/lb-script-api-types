import type { DataPaletteImpl$ChunkData } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPaletteImpl$ChunkData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DataPaletteImpl$ShortChunkData extends Object implements DataPaletteImpl$ChunkData {
    constructor(arg0: number[])
    // private data: number[];
    get(arg0: number): number;
    packInto(arg0: number[], arg1: number): void;
    set(arg0: number, arg1: number): void;
    size(): number;
}