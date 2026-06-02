import type { DataPalette } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { IdAndData } from '../../../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { AbstractChunkTracker } from '../../../../../../../net/raphimc/vialegacy/api/remapper/AbstractChunkTracker.d.ts'
export class ChunkTracker extends AbstractChunkTracker {
    constructor()
    postRemap(arg0: DataPalette): void;
    // private registerInvalidDirectionReplacements(arg0: number, arg1: IdAndData): void;
    remapBlock(arg0: IdAndData, arg1: number, arg2: number, arg3: number): void;
}