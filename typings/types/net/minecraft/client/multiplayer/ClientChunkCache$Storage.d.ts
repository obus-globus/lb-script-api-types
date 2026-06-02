import type { AtomicReferenceArray } from '../../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ClientChunkCache$Storage extends Object {
    private constructor(null_: ClientChunkCache$Storage, chunkRadius: number)
    // private chunkCount: number;
    // private chunkRadius: number;
    chunks: AtomicReferenceArray<LevelChunk>;
    // private loadedEmptySections: (Object | null)[];
    // private viewCenterX: number;
    // private viewCenterZ: number;
    // private viewRange: number;
    // private addEmptySections(chunk: LevelChunk): void;
    // private drop(index: number, oldChunk: LevelChunk): void;
    // private dropEmptySections(chunk: LevelChunk): void;
    // private dumpChunks(file: string): void;
    getChunk(index: number): LevelChunk;
    // private getIndex(chunkX: number, chunkZ: number): number;
    inRange(chunkX: number, chunkZ: number): boolean;
    onSectionEmptinessChanged(sectionX: number, sectionY: number, sectionZ: number, empty: boolean): void;
    // private refreshEmptySections(chunk: LevelChunk): void;
    // private replace(index: number, newChunk: LevelChunk): void;
}