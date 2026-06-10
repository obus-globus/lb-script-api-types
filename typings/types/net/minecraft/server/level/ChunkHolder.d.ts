import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkHolderExtended } from '../../../../net/caffeinemc/mods/lithium/common/world/chunk/ChunkHolderExtended.d.ts'
import type { FullChunkStatusEventTracker } from '../../../../net/fabricmc/fabric/impl/event/lifecycle/FullChunkStatusEventTracker.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ChunkHolder$LevelChangeListener } from '../../../../net/minecraft/server/level/ChunkHolder$LevelChangeListener.d.ts'
import type { ChunkHolder$PlayerProvider } from '../../../../net/minecraft/server/level/ChunkHolder$PlayerProvider.d.ts'
import type { ChunkMap } from '../../../../net/minecraft/server/level/ChunkMap.d.ts'
import type { ChunkResult } from '../../../../net/minecraft/server/level/ChunkResult.d.ts'
import type { FullChunkStatus } from '../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { GenerationChunkHolder } from '../../../../net/minecraft/server/level/GenerationChunkHolder.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelHeightAccessor } from '../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { LightLayer } from '../../../../net/minecraft/world/level/LightLayer.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { LevelChunk } from '../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelLightEngine } from '../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
export class ChunkHolder extends GenerationChunkHolder implements ChunkHolderExtended, FullChunkStatusEventTracker {
    static UNLOADED_CHUNK: ChunkResult<ChunkAccess>;
    static UNLOADED_CHUNK_FUTURE: CompletableFuture<ChunkResult<ChunkAccess>>;
    static UNLOADED_LEVEL_CHUNK: ChunkResult<LevelChunk>;
    constructor(pos: ChunkPos, ticketLevel: number, levelHeightAccessor: LevelHeightAccessor, lightEngine: LevelLightEngine, onLevelChange: (param0: ChunkPos, param1: () => number, param2: number, param3: (param0: number) => void) => void, playerProvider: ChunkHolder$PlayerProvider)
    // private blockChangedLightSectionFilter: BitSet;
    // private changedBlocksPerSection: (Object | null)[][];
    readonly entityTickingChunkFuture: CompletableFuture<ChunkResult<LevelChunk>>;
    // private fabric_currentEventFullChunkStatus: FullChunkStatus;
    readonly fullChunkFuture: CompletableFuture<ChunkResult<LevelChunk>>;
    // private hasChangedSections: boolean;
    // private lastRequestTime: number;
    // private levelHeightAccessor: LevelHeightAccessor;
    // private lightEngine: LevelLightEngine;
    // private oldTicketLevel: number;
    // private onLevelChange: (param0: ChunkPos, param1: () => number, param2: number, param3: (param0: number) => void) => void;
    // private pendingFullStateConfirmation: CompletableFuture<Object>;
    // private playerProvider: ChunkHolder$PlayerProvider;
    readonly queueLevel: number;
    // private saveSync: CompletableFuture<Object>;
    // private sendSync: CompletableFuture<Object>;
    // private skyChangedLightSectionFilter: BitSet;
    readonly ticketLevel: number;
    readonly tickingChunkFuture: CompletableFuture<ChunkResult<LevelChunk>>;
    // private wasAccessibleSinceLastSave: boolean;
    addSaveDependency(sync: CompletableFuture<Object>): void;
    addSendDependency(sync: CompletableFuture<Object>): void;
    blockChanged(pos: BlockPos): boolean;
    // private broadcast(players: ServerPlayer[], packet: Packet<Object>): void;
    // private broadcastBlockEntity(players: ServerPlayer[], level: Level, blockPos: BlockPos): void;
    // private broadcastBlockEntityIfNeeded(players: ServerPlayer[], level: Level, pos: BlockPos, state: BlockState): void;
    broadcastChanges(chunk: LevelChunk): void;
    // private demoteFullChunk(scheduler: ChunkMap, status: FullChunkStatus): void;
    fabric_getCurrentEventFullChunkStatus(): FullChunkStatus;
    fabric_setCurrentEventFullChunkStatus(arg0: FullChunkStatus): void;
    getChunkToSend(): LevelChunk;
    getEntityTickingChunkFuture(): CompletableFuture<ChunkResult<LevelChunk>>;
    getFullChunkFuture(): CompletableFuture<ChunkResult<LevelChunk>>;
    getQueueLevel(): number;
    getSaveSyncFuture(): CompletableFuture<Object>;
    getSendSyncFuture(): CompletableFuture<Object>;
    getTicketLevel(): number;
    getTickingChunk(): LevelChunk;
    getTickingChunkFuture(): CompletableFuture<ChunkResult<LevelChunk>>;
    hasChangesToBroadcast(): boolean;
    isReadyForSaving(): boolean;
    lithium$updateLastAccessTime(arg0: number): boolean;
    refreshAccessibility(): void;
    // private scheduleFullChunkPromotion(scheduler: ChunkMap, task: CompletableFuture<ChunkResult<LevelChunk>>, mainThreadExecutor: Executor, status: FullChunkStatus): void;
    sectionLightChanged(layer: LightLayer, chunkY: number): boolean;
    // private setQueueLevel(queueLevel: number): void;
    setTicketLevel(ticketLevel: number): void;
    updateFutures(scheduler: ChunkMap, mainThreadExecutor: Executor): void;
    wasAccessibleSinceLastSave(): boolean;
}