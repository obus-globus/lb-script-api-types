import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface LevelChunk$UnsavedListener extends Object{
    setUnsaved(chunkPos: ChunkPos): void;
}