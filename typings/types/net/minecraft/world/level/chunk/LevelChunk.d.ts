import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentTarget } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { AttachmentTargetImpl } from '../../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { AttachmentChange } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ClientboundLevelChunkPacketData$BlockEntityTagOutput } from '../../../../../net/minecraft/network/protocol/game/ClientboundLevelChunkPacketData$BlockEntityTagOutput.d.ts'
import type { FullChunkStatus } from '../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { DebugValueSource } from '../../../../../net/minecraft/util/debug/DebugValueSource.d.ts'
import type { DebugValueSource$Registration } from '../../../../../net/minecraft/util/debug/DebugValueSource$Registration.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityTicker } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityTicker.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { TickingBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TickingBlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkAccess$PackedTicks } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess$PackedTicks.d.ts'
import type { LevelChunk$EntityCreationType } from '../../../../../net/minecraft/world/level/chunk/LevelChunk$EntityCreationType.d.ts'
import type { LevelChunk$PostLoadProcessor } from '../../../../../net/minecraft/world/level/chunk/LevelChunk$PostLoadProcessor.d.ts'
import type { LevelChunk$RebindableTickingBlockEntityWrapper } from '../../../../../net/minecraft/world/level/chunk/LevelChunk$RebindableTickingBlockEntityWrapper.d.ts'
import type { LevelChunk$UnsavedListener } from '../../../../../net/minecraft/world/level/chunk/LevelChunk$UnsavedListener.d.ts'
import type { LevelChunkSection } from '../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { ProtoChunk } from '../../../../../net/minecraft/world/level/chunk/ProtoChunk.d.ts'
import type { UpgradeData } from '../../../../../net/minecraft/world/level/chunk/UpgradeData.d.ts'
import type { ChunkStatus } from '../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { GameEventListenerRegistry } from '../../../../../net/minecraft/world/level/gameevent/GameEventListenerRegistry.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { BlendingData } from '../../../../../net/minecraft/world/level/levelgen/blending/BlendingData.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { LevelChunkTicks } from '../../../../../net/minecraft/world/ticks/LevelChunkTicks.d.ts'
import type { TickContainerAccess } from '../../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class LevelChunk extends ChunkAccess implements AttachmentTargetImpl, DebugValueSource, LevelHeightAccessor {
    static NBT_ATTACHMENT_KEY: string;
    static NO_FILLED_SECTION: number;
    static create(paramminY: number, paramheight: number): LevelHeightAccessor;
    static getOrCreateOffsetList(paramlist: (Object | null)[], paramsectionIndex: number): (Object | null)[];
    static problemPath(parampos: ChunkPos): () => kotlin.String;
    static transfer(paramarg0: AttachmentTarget, paramarg1: AttachmentTarget, paramarg2: boolean): void;
    constructor(level: ServerLevel, protoChunk: ProtoChunk, postLoad: (param0: LevelChunk) => void)
    constructor(level: Level, pos: ChunkPos)
    constructor(level: Level, pos: ChunkPos, upgradeData: UpgradeData, blockTicks: LevelChunkTicks<Block>, fluidTicks: LevelChunkTicks<Fluid>, inhabitedTime: number, sections: LevelChunkSection[], postLoad: (param0: LevelChunk) => void, blendingData: BlendingData)
    readonly blockTicks: LevelChunkTicks<Block>;
    readonly fluidTicks: LevelChunkTicks<Fluid>;
    readonly fullStatus: () => FullChunkStatus;
    readonly gameEventListenerRegistrySections: Int2ObjectMap<GameEventListenerRegistry>;
    readonly level: Level;
    loaded: boolean;
    // private postLoad: (param0: LevelChunk) => void;
    // private tickersInLevel: Map<BlockPos, LevelChunk$RebindableTickingBlockEntityWrapper>;
    readonly unsavedListener: (param0: ChunkPos) => void;
    addAndRegisterBlockEntity(blockEntity: BlockEntity): void;
    addEntity(entity: Entity): void;
    // private addGameEventListener<T extends BlockEntity>(blockEntity: T, level: ServerLevel): void;
    clearAllBlockEntities(): void;
    // private createBlockEntity(pos: BlockPos): BlockEntity;
    // private createTicker<T extends BlockEntity>(blockEntity: T, ticker: (param0: T, param1: Level, param2: BlockPos, param3: BlockState) => void): TickingBlockEntity;
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: Object) => void): void;
    fabric_getAttachments(): Map<AttachmentType<Object>, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    getBlockEntities(): Map<BlockPos, BlockEntity>;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntity(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockEntity(pos: BlockPos, creationType: LevelChunk$EntityCreationType): BlockEntity;
    getBlockEntityNbtForSaving(blockPos: BlockPos, registryAccess: HolderLookup$Provider): CompoundTag;
    getBlockState(arg0: BlockPos): BlockState;
    getBlockTicks(): TickContainerAccess<Block>;
    getFluidState(arg0: number, arg1: number, arg2: number): FluidState;
    getFluidState(pos: BlockPos): FluidState;
    getFluidTicks(): TickContainerAccess<Fluid>;
    getFullStatus(): FullChunkStatus;
    getHeight(): number;
    getHeight(type: Heightmap$Types, x: number, z: number): number;
    getLevel(): Level;
    getListenerRegistry(section: number): GameEventListenerRegistry;
    getMaxSectionY(): number;
    getMaxSectionY(): number;
    getMaxY(): number;
    getMaxY(): number;
    getMinSectionY(): number;
    getMinSectionY(): number;
    getMinY(): number;
    getPersistedStatus(): ChunkStatus;
    getSectionIndex(blockY: number): number;
    getSectionIndex(arg0: number): number;
    getSectionIndexFromSectionY(sectionY: number): number;
    getSectionIndexFromSectionY(arg0: number): number;
    getSectionYFromSectionIndex(sectionIndex: number): number;
    getSectionYFromSectionIndex(arg0: number): number;
    getSectionsCount(): number;
    getSectionsCount(): number;
    getTicksForSerialization(currentTick: number): ChunkAccess$PackedTicks;
    isEmpty(): boolean;
    // private isInLevel(): boolean;
    isInsideBuildHeight(blockY: number): boolean;
    isInsideBuildHeight(pos: BlockPos): boolean;
    isInsideBuildHeight(arg0: number): boolean;
    isInsideBuildHeight(pos: BlockPos): boolean;
    isOutsideBuildHeight(blockY: number): boolean;
    isOutsideBuildHeight(pos: BlockPos): boolean;
    isOutsideBuildHeight(arg0: number): boolean;
    isOutsideBuildHeight(arg0: BlockPos): boolean;
    // private isTicking(pos: BlockPos): boolean;
    markUnsaved(): void;
    postProcessGeneration(level: ServerLevel): void;
    // private promotePendingBlockEntity(pos: BlockPos, tag: CompoundTag): BlockEntity;
    registerAllBlockEntitiesAfterLevelLoad(): void;
    registerDebugValues(level: ServerLevel, registration: DebugValueSource$Registration): void;
    registerTickContainerInLevel(level: ServerLevel): void;
    removeBlockEntity(pos: BlockPos): void;
    // private removeBlockEntityTicker(pos: BlockPos): void;
    // private removeGameEventListener<T extends BlockEntity>(blockEntity: T, level: ServerLevel): void;
    // private removeGameEventListenerRegistry(sectionY: number): void;
    replaceBiomes(buffer: FriendlyByteBuf): void;
    replaceWithPacketData(buffer: FriendlyByteBuf, heightmaps: { [key in Heightmap$Types]: number[] }, blockEntities: (param0: (param0: BlockPos, param1: BlockEntityType<Object>, param2: CompoundTag) => void) => void): void;
    runPostLoad(): void;
    setBlockEntity(blockEntity: BlockEntity): void;
    setBlockState(pos: BlockPos, state: BlockState): BlockState;
    setBlockState(pos: BlockPos, state: BlockState, flags: number): BlockState;
    setFullStatus(fullStatus: () => FullChunkStatus): void;
    setGameEventListenerRegistrySections(arg0: Int2ObjectMap<Object>): void;
    setLoaded(loaded: boolean): void;
    setUnsavedListener(unsavedListener: (param0: ChunkPos) => void): void;
    unpackTicks(currentTick: number): void;
    unregisterTickContainerFromLevel(level: ServerLevel): void;
    // private updateBlockEntityTicker<T extends BlockEntity>(blockEntity: T): void;
}