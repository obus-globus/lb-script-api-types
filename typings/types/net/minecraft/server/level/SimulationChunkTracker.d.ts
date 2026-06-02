import type { ChunkTracker } from '../../../../net/minecraft/server/level/ChunkTracker.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { TicketStorage } from '../../../../net/minecraft/world/level/TicketStorage.d.ts'
export class SimulationChunkTracker extends ChunkTracker {
    static MAX_LEVEL: number;
    static SOURCE: number;
    constructor(ticketStorage: TicketStorage)
    // private chunks: Long2ByteMap;
    // private ticketStorage: TicketStorage;
    getLevel(node: number): number;
    getLevel(node: ChunkPos): number;
    getLevelFromSource(to: number): number;
    runAllUpdates(): void;
    setLevel(node: number, level: number): void;
}