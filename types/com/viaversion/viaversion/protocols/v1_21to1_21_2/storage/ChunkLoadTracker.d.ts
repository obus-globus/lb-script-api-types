import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ChunkLoadTracker extends Object implements StorableObject {
    constructor()
    // private loadedChunks: (Object | null)[];
    addChunk(arg0: number, arg1: number): void;
    clear(): void;
    isChunkLoaded(arg0: number, arg1: number): boolean;
    onRemove(): void;
    removeChunk(arg0: number, arg1: number): void;
}