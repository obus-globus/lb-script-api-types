import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkLoadTracker extends Object {
    constructor()
    // private loadedChunks: (Object | null)[];
    addChunk(arg0: number, arg1: number): void;
    clear(): void;
    isChunkLoaded(arg0: number, arg1: number): boolean;
    removeChunk(arg0: number, arg1: number): void;
}