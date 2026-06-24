import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { ChunkHolder } from '../../../../net/minecraft/server/level/ChunkHolder.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { DistanceManager } from '../../../../net/minecraft/server/level/DistanceManager.d.ts'
import type { TicketStorage } from '../../../../net/minecraft/world/level/TicketStorage.d.ts'
export class ChunkMap$DistanceManager extends DistanceManager {
    constructor(null_: ChunkMap, ticketStorage: TicketStorage, executor: Executor, mainThreadExecutor: Executor)
    getChunk(node: number): ChunkHolder;
    isChunkToRemove(node: number): boolean;
    updateChunkScheduling(node: number, level: number, chunk: ChunkHolder, oldLevel: number): ChunkHolder;
}