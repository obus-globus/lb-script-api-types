import type { DataFixer } from '../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Dynamic } from '../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ChunkMapAccessor } from '../../../../net/fabricmc/fabric/mixin/networking/accessor/ChunkMapAccessor.d.ts'
import type { ReportedException } from '../../../../net/minecraft/ReportedException.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientGamePacketListener } from '../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ChunkGenerationTask } from '../../../../net/minecraft/server/level/ChunkGenerationTask.d.ts'
import type { ChunkHolder } from '../../../../net/minecraft/server/level/ChunkHolder.d.ts'
import type { ChunkHolder$PlayerProvider } from '../../../../net/minecraft/server/level/ChunkHolder$PlayerProvider.d.ts'
import type { ChunkMap$DistanceManager } from '../../../../net/minecraft/server/level/ChunkMap$DistanceManager.d.ts'
import type { ChunkMap$TrackedEntity } from '../../../../net/minecraft/server/level/ChunkMap$TrackedEntity.d.ts'
import type { ChunkResult } from '../../../../net/minecraft/server/level/ChunkResult.d.ts'
import type { ChunkTaskDispatcher } from '../../../../net/minecraft/server/level/ChunkTaskDispatcher.d.ts'
import type { ChunkTrackingView } from '../../../../net/minecraft/server/level/ChunkTrackingView.d.ts'
import type { DistanceManager } from '../../../../net/minecraft/server/level/DistanceManager.d.ts'
import type { FullChunkStatus } from '../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { GeneratingChunkMap } from '../../../../net/minecraft/server/level/GeneratingChunkMap.d.ts'
import type { GenerationChunkHolder } from '../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { PlayerMap } from '../../../../net/minecraft/server/level/PlayerMap.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ThreadedLevelLightEngine } from '../../../../net/minecraft/server/level/ThreadedLevelLightEngine.d.ts'
import type { StaticCache2D } from '../../../../net/minecraft/util/StaticCache2D.d.ts'
import type { BlockableEventLoop } from '../../../../net/minecraft/util/thread/BlockableEventLoop.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { PoiManager } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiManager.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { TicketStorage } from '../../../../net/minecraft/world/level/TicketStorage.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkGenerator } from '../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ChunkGeneratorStructureState } from '../../../../net/minecraft/world/level/chunk/ChunkGeneratorStructureState.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LightChunkGetter } from '../../../../net/minecraft/world/level/chunk/LightChunkGetter.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStep } from '../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
import type { ChunkType } from '../../../../net/minecraft/world/level/chunk/status/ChunkType.d.ts'
import type { WorldGenContext } from '../../../../net/minecraft/world/level/chunk/status/WorldGenContext.d.ts'
import type { SimpleRegionStorage } from '../../../../net/minecraft/world/level/chunk/storage/SimpleRegionStorage.d.ts'
import type { ChunkStatusUpdateListener } from '../../../../net/minecraft/world/level/entity/ChunkStatusUpdateListener.d.ts'
import type { RandomState } from '../../../../net/minecraft/world/level/levelgen/RandomState.d.ts'
import type { StructureTemplateManager } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
import type { LevelStorageSource$LevelStorageAccess } from '../../../../net/minecraft/world/level/storage/LevelStorageSource$LevelStorageAccess.d.ts'
import type { SavedDataStorage } from '../../../../net/minecraft/world/level/storage/SavedDataStorage.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ChunkMap extends SimpleRegionStorage implements ChunkMapAccessor, ChunkHolder$PlayerProvider, GeneratingChunkMap {
    static FORCED_TICKET_LEVEL: number;
    static MAX_VIEW_DISTANCE: number;
    static MIN_VIEW_DISTANCE: number;
    static getChunkDataFixContextTag(paramdimension: ResourceKey<Level>, paramgeneratorIdentifier: Optional<Identifier>): CompoundTag;
    static injectDatafixingContext(paramchunkTag: CompoundTag, paramcontextTag: CompoundTag): void;
    constructor(level: ServerLevel, levelStorage: LevelStorageSource$LevelStorageAccess, dataFixer: DataFixer, structureManager: StructureTemplateManager, executor: Executor, mainThreadExecutor: BlockableEventLoop<() => void>, chunkGetter: LightChunkGetter, generator: ChunkGenerator, chunkStatusListener: (param0: ChunkPos, param1: FullChunkStatus) => void, overworldDataStorage: () => SavedDataStorage, ticketStorage: TicketStorage, serverViewDistance: number, syncWrites: boolean)
    // private activeChunkWrites: AtomicInteger;
    // private chunkGeneratorState: ChunkGeneratorStructureState;
    // private chunkStatusListener: (param0: ChunkPos, param1: FullChunkStatus) => void;
    // private chunkTypeCache: Long2ByteMap;
    // private chunksToEagerlySave: (Object | null)[];
    readonly distanceManager: ChunkMap$DistanceManager;
    readonly entityMap: Int2ObjectMap<ChunkMap$TrackedEntity>;
    level: ServerLevel;
    // private lightEngine: ThreadedLevelLightEngine;
    // private lightTaskDispatcher: ChunkTaskDispatcher;
    // private mainThreadExecutor: BlockableEventLoop<() => void>;
    // private modified: boolean;
    // private nextChunkSaveTime: Long2LongMap;
    // private pendingGenerationTasks: ChunkGenerationTask[];
    // private pendingUnloads: Long2ObjectLinkedOpenHashMap<ChunkHolder>;
    // private playerMap: PlayerMap;
    // private poiManager: PoiManager;
    // private randomState: RandomState;
    // private serverViewDistance: number;
    readonly storageName: string;
    // private ticketStorage: TicketStorage;
    // private toDrop: (Object | null)[];
    // private unloadQueue: () => void[];
    // private updatingChunkMap: Long2ObjectLinkedOpenHashMap<ChunkHolder>;
    // private visibleChunkMap: Long2ObjectLinkedOpenHashMap<ChunkHolder>;
    // private worldGenContext: WorldGenContext;
    // private worldgenTaskDispatcher: ChunkTaskDispatcher;
    acquireGeneration(chunkNode: number): GenerationChunkHolder;
    addEntity(entity: Entity): void;
    allChunksWithAtLeastStatus(status: ChunkStatus): Stream<ChunkHolder>;
    anyPlayerCloseEnoughForSpawning(pos: ChunkPos): boolean;
    // private anyPlayerCloseEnoughForSpawningInternal(pos: ChunkPos): boolean;
    anyPlayerCloseEnoughTo(pos: BlockPos, maxDistance: number): boolean;
    // private applyChunkTrackingView(player: ServerPlayer, next: ChunkTrackingView): void;
    applyStep(chunkHolder: GenerationChunkHolder, step: ChunkStep, cache: StaticCache2D<GenerationChunkHolder>): CompletableFuture<ChunkAccess>;
    close(): void;
    collectSpawningChunks(output: LevelChunk[]): void;
    // private createEmptyChunk(pos: ChunkPos): ChunkAccess;
    debugFuturesAndCreateReportedException(exception: IllegalStateException, details: string): ReportedException;
    dumpChunks(output: Writer): void;
    forEachBlockTickingChunk(tickingChunkConsumer: (param0: LevelChunk) => void): void;
    forEachEntityTrackedBy(player: ServerPlayer, consumer: (param0: Entity) => void): void;
    forEachReadyToSendChunk(consumer: (param0: LevelChunk) => void): void;
    generator(): ChunkGenerator;
    generatorState(): ChunkGeneratorStructureState;
    getChunkDebugData(pos: ChunkPos): string;
    getChunkQueueLevel(pos: number): () => kotlin.Int;
    getChunkRangeFuture(centerChunk: ChunkHolder, range: number, distanceToStatus: (param0: ChunkStatus) => unknown): CompletableFuture<ChunkResult<ChunkAccess[]>>;
    getChunkToSend(key: number): LevelChunk;
    getDistanceManager(): DistanceManager;
    getLatestStatus(key: number): ChunkStatus;
    getLightEngine(): ThreadedLevelLightEngine;
    // private getPlayerViewDistance(player: ServerPlayer): number;
    getPlayers(pos: ChunkPos, borderOnly: boolean): ServerPlayer[];
    getPlayersCloseForSpawning(pos: ChunkPos): ServerPlayer[];
    getPoiManager(): PoiManager;
    getStorageName(): string;
    getUpdatingChunkIfPresent(key: number): ChunkHolder;
    getVisibleChunkIfPresent(key: number): ChunkHolder;
    // private handleChunkLoadFailure(throwable: Throwable, pos: ChunkPos): ChunkAccess;
    hasWork(): boolean;
    // private isChunkOnTrackedBorder(player: ServerPlayer, chunkX: number, chunkZ: number): boolean;
    isChunkTracked(player: ServerPlayer, chunkX: number, chunkZ: number): boolean;
    // private isExistingChunkFull(pos: ChunkPos): boolean;
    isTrackedByAnyPlayer(entity: Entity): boolean;
    // private markChunkPendingToSend(player: ServerPlayer, pos: ChunkPos): void;
    // private markPosition(pos: ChunkPos, type: ChunkType): number;
    // private markPositionReplaceable(pos: ChunkPos): void;
    move(player: ServerPlayer): void;
    // private onChunkReadyToSend(chunkHolder: ChunkHolder, chunk: LevelChunk): void;
    onFullChunkStatusChange(pos: ChunkPos, status: FullChunkStatus): void;
    // private onLevelChange(pos: ChunkPos, oldLevel: () => kotlin.Int, newLevel: number, setQueueLevel: (param0: number) => void): void;
    // private playerIsCloseEnoughForSpawning(player: ServerPlayer, pos: ChunkPos): boolean;
    // private playerIsCloseEnoughTo(player: ServerPlayer, pos: Vec3, maxDistance: number): boolean;
    prepareAccessibleChunk(chunk: ChunkHolder): CompletableFuture<ChunkResult<LevelChunk>>;
    prepareEntityTickingChunk(chunk: ChunkHolder): CompletableFuture<ChunkResult<LevelChunk>>;
    prepareTickingChunk(chunk: ChunkHolder): CompletableFuture<ChunkResult<LevelChunk>>;
    // private processUnloads(haveTime: () => kotlin.Boolean): void;
    promoteChunkMap(): boolean;
    randomState(): RandomState;
    // private readChunk(pos: ChunkPos): CompletableFuture<Optional<CompoundTag>>;
    releaseGeneration(chunkHolder: GenerationChunkHolder): void;
    removeEntity(entity: Entity): void;
    resendBiomesForChunks(chunks: ChunkAccess[]): void;
    // private runGenerationTask(task: ChunkGenerationTask): void;
    runGenerationTasks(): void;
    // private save(chunk: ChunkAccess): boolean;
    saveAllChunks(flushStorage: boolean): void;
    // private saveChunkIfNeeded(chunk: ChunkHolder, now: number): boolean;
    // private saveChunksEagerly(haveTime: () => kotlin.Boolean): void;
    // private scheduleChunkLoad(pos: ChunkPos): CompletableFuture<ChunkAccess>;
    scheduleGenerationTask(targetStatus: ChunkStatus, pos: ChunkPos): ChunkGenerationTask;
    // private scheduleUnload(pos: number, chunkHolder: ChunkHolder): void;
    sendToTrackingPlayers(entity: Entity, packet: Packet<ClientGamePacketListener>): void;
    sendToTrackingPlayersAndSelf(entity: Entity, packet: Packet<ClientGamePacketListener>): void;
    sendToTrackingPlayersFiltered(entity: Entity, packet: Packet<ClientGamePacketListener>, targetPredicate: (param0: ServerPlayer) => kotlin.Boolean): void;
    // private setChunkUnsaved(chunkPos: ChunkPos): void;
    setServerViewDistance(newViewDistance: number): void;
    size(): number;
    // private skipPlayer(player: ServerPlayer): boolean;
    tick(): void;
    tick(haveTime: () => kotlin.Boolean): void;
    // private updateChunkScheduling(node: number, level: number, chunk: ChunkHolder, oldLevel: number): ChunkHolder;
    // private updateChunkTracking(player: ServerPlayer): void;
    // private updatePlayerPos(player: ServerPlayer): void;
    updatePlayerStatus(player: ServerPlayer, added: boolean): void;
    upgradeChunkTag(chunkTag: Dynamic<Tag>, defaultVersion: number): Dynamic<Tag>;
    // private upgradeChunkTag(tag: CompoundTag): CompoundTag;
    upgradeChunkTag(chunkTag: CompoundTag, defaultVersion: number): CompoundTag;
    upgradeChunkTag(chunkTag: CompoundTag, defaultVersion: number, dataFixContextTag: CompoundTag, targetVersion: number): CompoundTag;
    waitForLightBeforeSending(centerChunk: ChunkPos, chunkRadius: number): void;
}