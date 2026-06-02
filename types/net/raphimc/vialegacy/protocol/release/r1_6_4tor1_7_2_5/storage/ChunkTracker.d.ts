import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { DataPalette } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { IdAndData } from '../../../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { AbstractChunkTracker } from '../../../../../../../net/raphimc/vialegacy/api/remapper/AbstractChunkTracker.d.ts'
export class ChunkTracker extends AbstractChunkTracker {
    constructor(arg0: UserConnection)
    // private b173: boolean;
    postRemap(arg0: DataPalette): void;
    remapBlock(arg0: IdAndData, arg1: number, arg2: number, arg3: number): void;
}