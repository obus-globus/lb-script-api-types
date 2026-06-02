import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../net/minecraft/core/SectionPos.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ChunkHolder } from '../../../../net/minecraft/server/level/ChunkHolder.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { ChunkResult } from '../../../../net/minecraft/server/level/ChunkResult.d.ts'
import type { DistanceManager } from '../../../../net/minecraft/server/level/DistanceManager.d.ts'
import type { FullChunkStatus } from '../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ServerChunkCache$MainThreadExecutor } from '../../../../net/minecraft/server/level/ServerChunkCache$MainThreadExecutor.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ThreadedLevelLightEngine } from '../../../../net/minecraft/server/level/ThreadedLevelLightEngine.d.ts'
import type { Ticket } from '../../../../net/minecraft/server/level/Ticket.d.ts'
import type { TicketType } from '../../../../net/minecraft/server/level/TicketType.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { MobCategory } from '../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { PoiManager } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { LightLayer } from '../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { NaturalSpawner$SpawnState } from '../../../../net/minecraft/world/level/NaturalSpawner$SpawnState.d.ts'
import type { TicketStorage } from '../../../../net/minecraft/world/level/TicketStorage.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkGenerator } from '../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { ChunkSource } from '../../../../net/minecraft/world/level/chunk/ChunkSource.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LightChunk } from '../../../../net/minecraft/world/level/chunk/LightChunk.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkScanAccess } from '../../../../net/minecraft/world/level/chunk/storage/ChunkScanAccess.d.ts'
import type { ChunkStatusUpdateListener } from '../../../../net/minecraft/world/level/entity/ChunkStatusUpdateListener.d.ts'
import type { RandomState } from '../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { StructureTemplateManager } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { SavedDataStorage } from '../../../../net/minecraft/world/level/storage/SavedDataStorage.d.ts'
export class ServerChunkCache extends ChunkSource {
    constructor(level: ServerLevel, levelStorage: LevelStorageSource$LevelStorageAccess, fixerUpper: DataFixer, structureTemplateManager: StructureTemplateManager, executor: Executor, generator: ChunkGenerator, viewDistance: number, simulationDistance: number, syncWrites: boolean, chunkStatusListener: (param0: ChunkPos, param1: FullChunkStatus) => void, overworldDataStorage: () => SavedDataStorage)
    // private cacheChunks: ChunkAccess[];
    // private cacheKeys: number[];
    // private chunkHoldersToBroadcast: ChunkHolder[];
    chunkMap: ChunkMap;
    // private distanceManager: DistanceManager;
    // private lastChunk: ChunkAccess[];
    // private lastChunkPos: number[];
    // private lastChunkStatus: ChunkStatus[];
    // private lastInhabitedUpdate: number;
    readonly lastSpawnState: NaturalSpawner$SpawnState;
    readonly level: ServerLevel;
    readonly lightEngine: ThreadedLevelLightEngine;
    // private mainThread: Thread;
    // private mainThreadProcessor: ServerChunkCache$MainThreadExecutor;
    // private savedDataStorage: SavedDataStorage;
    // private spawnEnemies: boolean;
    // private spawningChunks: LevelChunk[];
    // private ticketStorage: TicketStorage;
    // private time: number;
    addEntity(entity: Entity): void;
    addTicket(ticket: Ticket, pos: ChunkPos): void;
    addTicketAndLoadWithRadius(type: TicketType, pos: ChunkPos, radius: number): CompletableFuture<Object>;
    addTicketWithRadius(type: TicketType, pos: ChunkPos, radius: number): void;
    // private addToCache(arg0: number, arg1: ChunkAccess): void;
    blockChanged(pos: BlockPos): void;
    // private broadcastChangedChunks(profiler: ProfilerFiller): void;
    // private chunkAbsent(chunkHolder: ChunkHolder, targetTicketLevel: number): boolean;
    chunkScanner(): ChunkScanAccess;
    // private clearCache(): void;
    close(): void;
    // private createChunkLoadTicket(arg0: number, arg1: number, arg2: number): void;
    deactivateTicketsOnClosing(): void;
    gatherStats(): string;
    getChunk(arg0: number, arg1: number, arg2: ChunkStatus, arg3: boolean): ChunkAccess;
    // private getChunkBlocking(arg0: number, arg1: number, arg2: ChunkStatus, arg3: boolean): ChunkAccess;
    getChunkDebugData(pos: ChunkPos): string;
    getChunkForLighting(x: number, z: number): LightChunk;
    getChunkFuture(x: number, z: number, targetStatus: ChunkStatus, loadOrGenerate: boolean): CompletableFuture<ChunkResult<ChunkAccess>>;
    // private getChunkFutureMainThread(x: number, z: number, targetStatus: ChunkStatus, loadOrGenerate: boolean): CompletableFuture<ChunkResult<ChunkAccess>>;
    getChunkNow(x: number, z: number): LevelChunk;
    // private getChunkOffThread(arg0: number, arg1: number, arg2: ChunkStatus, arg3: boolean): ChunkAccess;
    getDataStorage(): SavedDataStorage;
    getForceLoadedChunks(): (Object | null)[];
    // private getFullChunk(chunkKey: number, output: (param0: LevelChunk) => void): void;
    getGenerator(): ChunkGenerator;
    getGeneratorState(): ChunkGeneratorStructureState;
    getLastSpawnState(): NaturalSpawner$SpawnState;
    getLevel(): Level;
    getLightEngine(): ThreadedLevelLightEngine;
    getLoadedChunksCount(): number;
    getPendingTasksCount(): number;
    getPoiManager(): PoiManager;
    // private getVisibleChunkIfPresent(key: number): ChunkHolder;
    hasActiveTickets(): boolean;
    hasChunk(x: number, z: number): boolean;
    isPositionTicking(chunkKey: number): boolean;
    move(player: ServerPlayer): void;
    onChunkReadyToSend(chunk: ChunkHolder): void;
    onLightUpdate(layer: LightLayer, pos: SectionPos): void;
    pollTask(): boolean;
    randomState(): RandomState;
    removeEntity(entity: Entity): void;
    removeTicketWithRadius(type: TicketType, pos: ChunkPos, radius: number): void;
    runDistanceManagerUpdates(): boolean;
    save(flushStorage: boolean): void;
    sendToTrackingPlayers(entity: Entity, packet: Packet<ClientGamePacketListener>): void;
    sendToTrackingPlayersAndSelf(entity: Entity, packet: Packet<ClientGamePacketListener>): void;
    setSimulationDistance(simulationDistance: number): void;
    setSpawnSettings(spawnEnemies: boolean): void;
    setViewDistance(newDistance: number): void;
    // private storeInCache(pos: number, chunk: ChunkAccess, status: ChunkStatus): void;
    tick(haveTime: () => kotlin.Boolean, tickChunks: boolean): void;
    // private tickChunks(): void;
    // private tickChunks(profiler: ProfilerFiller, timeDiff: number): void;
    // private tickSpawningChunk(chunk: LevelChunk, timeDiff: number, spawningCategories: MobCategory[], spawnCookie: NaturalSpawner$SpawnState): void;
    updateChunkForced(pos: ChunkPos, forced: boolean): boolean;
}