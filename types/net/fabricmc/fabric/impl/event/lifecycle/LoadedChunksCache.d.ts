import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface LoadedChunksCache extends Object{
    fabric_getLoadedChunks(): LevelChunk[];
    fabric_markLoaded(arg0: LevelChunk): void;
    fabric_markUnloaded(arg0: LevelChunk): void;
}