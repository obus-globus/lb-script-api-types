import type { LongConsumer } from '../../../../it/unimi/dsi/fastutil/longs/LongConsumer.d.ts'
import type { LongIterator } from '../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { ChunkHolder } from '../../../../net/minecraft/server/level/ChunkHolder.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { DistanceManager$FixedPlayerDistanceChunkTracker } from '../../../../net/minecraft/server/level/DistanceManager$FixedPlayerDistanceChunkTracker.d.ts'
import type { DistanceManager$PlayerTicketTracker } from '../../../../net/minecraft/server/level/DistanceManager$PlayerTicketTracker.d.ts'
import type { LoadingChunkTracker } from '../../../../net/minecraft/server/level/LoadingChunkTracker.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { SimulationChunkTracker } from '../../../../net/minecraft/server/level/SimulationChunkTracker.d.ts'
import type { ThrottlingChunkTaskDispatcher } from '../../../../net/minecraft/server/level/ThrottlingChunkTaskDispatcher.d.ts'
import type { TriState } from '../../../../net/minecraft/util/TriState.d.ts'
import type { TicketStorage } from '../../../../net/minecraft/world/level/TicketStorage.d.ts'
export abstract class DistanceManager extends Object {
    constructor(ticketStorage: TicketStorage, executor: Executor, mainThreadExecutor: Executor)
    // private chunksToUpdateFutures: ChunkHolder[];
    // private loadingChunkTracker: LoadingChunkTracker;
    // private mainThreadExecutor: Executor;
    // private naturalSpawnChunkCounter: DistanceManager$FixedPlayerDistanceChunkTracker;
    // private playerTicketManager: DistanceManager$PlayerTicketTracker;
    // private playersPerChunk: Long2ObjectMap<ServerPlayer[]>;
    // private simulationChunkTracker: SimulationChunkTracker;
    // private simulationDistance: number;
    // private ticketDispatcher: ThrottlingChunkTaskDispatcher;
    // private ticketStorage: TicketStorage;
    // private ticketsToRelease: (Object | null)[];
    addPlayer(pos: SectionPos, player: ServerPlayer): void;
    forEachEntityTickingChunk(consumer: (param0: number) => void): void;
    getChunk(node: number): ChunkHolder;
    getChunkLevel(key: number, simulation: boolean): number;
    getDebugStatus(): string;
    getNaturalSpawnChunkCount(): number;
    // private getPlayerTicketLevel(): number;
    getSpawnCandidateChunks(): LongIterator;
    hasPlayersNearby(pos: number): TriState;
    hasTickets(): boolean;
    inBlockTickingRange(key: number): boolean;
    inEntityTickingRange(key: number): boolean;
    isChunkToRemove(node: number): boolean;
    removePlayer(pos: SectionPos, player: ServerPlayer): void;
    runAllUpdates(scheduler: ChunkMap): boolean;
    updateChunkScheduling(node: number, level: number, chunk: ChunkHolder, oldLevel: number): ChunkHolder;
    updatePlayerTickets(viewDistance: number): void;
    updateSimulationDistance(newDistance: number): void;
}