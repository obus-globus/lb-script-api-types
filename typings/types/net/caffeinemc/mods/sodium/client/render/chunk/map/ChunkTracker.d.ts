import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ChunkTracker$ChunkEventHandler } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/map/ChunkTracker$ChunkEventHandler.d.ts'
import type { ClientChunkEventListener } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/map/ClientChunkEventListener.d.ts'
export class ChunkTracker extends Object implements ClientChunkEventListener {
    static forEachChunk(paramarg0: (Object | null)[], paramarg1: ChunkTracker$ChunkEventHandler): void;
    constructor()
    // private chunkReady: (Object | null)[];
    // private chunkStatus: { [key: string]: any };
    // private loadQueue: (Object | null)[];
    // private unloadQueue: (Object | null)[];
    forEachEvent(arg0: ChunkTracker$ChunkEventHandler, arg1: ChunkTracker$ChunkEventHandler): void;
    getReadyChunks(): (Object | null)[];
    onChunkStatusAdded(arg0: number, arg1: number, arg2: number): void;
    onChunkStatusRemoved(arg0: number, arg1: number, arg2: number): void;
    updateLoadDistance(arg0: number): void;
    updateMapCenter(arg0: number, arg1: number): void;
    // private updateMerged(arg0: number, arg1: number): void;
    // private updateNeighbors(arg0: number, arg1: number): void;
}