import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientChunkCache } from '../../../../net/minecraft/client/multiplayer/ClientChunkCache.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ClientChunkCache$Storage extends Object {
    private constructor(null_: ClientChunkCache, chunkRadius: number)
    // private addedEmptySections: (Object | null)[][];
    // private addedLoadedChunks: (Object | null)[][];
    // private chunkCount: number;
    // private chunkRadius: number;
    chunks: AtomicReferenceArray<LevelChunk>;
    // private removedEmptySections: (Object | null)[][];
    // private removedLoadedChunks: (Object | null)[][];
    // private updatingSetsIndex: number;
    // private viewCenterX: number;
    // private viewCenterZ: number;
    // private viewRange: number;
    // private drop(index: number, oldChunk: LevelChunk): void;
    // private dumpChunks(file: string): void;
    getChunk(index: number): LevelChunk;
    // private getIndex(chunkX: number, chunkZ: number): number;
    inRange(chunkX: number, chunkZ: number): boolean;
    // private onChunkAdded(chunk: LevelChunk): void;
    // private onChunkRemoved(chunk: LevelChunk): void;
    onSectionEmptinessChanged(sectionX: number, sectionY: number, sectionZ: number, empty: boolean): void;
    // private refreshEmptySections(chunk: LevelChunk): void;
    // private replace(index: number, newChunk: LevelChunk): void;
}