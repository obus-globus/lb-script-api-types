import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
export interface ChunkView extends Object{
    lithium$getLoadedChunk(arg0: number, arg1: number): ChunkAccess;
}