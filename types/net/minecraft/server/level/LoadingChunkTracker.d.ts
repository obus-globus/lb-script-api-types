import type { ChunkTracker } from '../../../../net/minecraft/server/level/ChunkTracker.d.ts'
import type { DistanceManager } from '../../../../net/minecraft/server/level/DistanceManager.d.ts'
import type { TicketStorage } from '../../../../net/minecraft/world/level/TicketStorage.d.ts'
export class LoadingChunkTracker extends ChunkTracker {
    static SOURCE: number;
    constructor(distanceManager: DistanceManager, ticketStorage: TicketStorage)
    // private distanceManager: DistanceManager;
    // private ticketStorage: TicketStorage;
    getLevel(node: number): number;
    getLevelFromSource(to: number): number;
    runDistanceUpdates(count: number): number;
    setLevel(node: number, level: number): void;
}