import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class PlayerChunkSender extends Object {
    static MAX_CHUNKS_PER_TICK: number;
    static MIN_CHUNKS_PER_TICK: number;
    constructor(memoryConnection: boolean)
    // private batchQuota: number;
    // private desiredChunksPerTick: number;
    // private maxUnacknowledgedBatches: number;
    // private memoryConnection: boolean;
    // private pendingChunks: (Object | null)[];
    // private unacknowledgedBatches: number;
    // private collectChunksToSend(chunkMap: ChunkMap, playerPos: ChunkPos): LevelChunk[];
    dropChunk(player: ServerPlayer, pos: ChunkPos): void;
    isPending(pos: number): boolean;
    markChunkPendingToSend(chunk: LevelChunk): void;
    onChunkBatchReceivedByClient(desiredChunksPerTick: number): void;
    sendNextChunks(player: ServerPlayer): void;
}