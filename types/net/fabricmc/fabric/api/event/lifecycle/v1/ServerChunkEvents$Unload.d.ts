import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LevelChunk } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface ServerChunkEvents$Unload extends Object{
    onChunkUnload(arg0: ServerLevel, arg1: LevelChunk): void;
}