import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FullChunkStatus } from '../../../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LevelChunk } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface ServerChunkEvents$FullChunkStatusChange extends Object{
    onFullChunkStatusChange(arg0: ServerLevel, arg1: LevelChunk, arg2: FullChunkStatus, arg3: FullChunkStatus): void;
}