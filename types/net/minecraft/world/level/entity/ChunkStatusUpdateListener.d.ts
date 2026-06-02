import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FullChunkStatus } from '../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface ChunkStatusUpdateListener extends Object{
    onChunkStatusChange(pos: ChunkPos, chunkStatus: FullChunkStatus): void;
}