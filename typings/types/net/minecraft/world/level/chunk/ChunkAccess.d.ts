import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { AttachmentTarget } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget.d.ts'
import type { AttachmentTarget$OnAttachedSet } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentTarget$OnAttachedSet.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
import type { Event } from '../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { AttachmentTargetImpl } from '../../../../../net/fabricmc/fabric/impl/attachment/AttachmentTargetImpl.d.ts'
import type { AttachmentChange } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentChange.d.ts'
import type { AttachmentTargetInfo } from '../../../../../net/fabricmc/fabric/impl/attachment/sync/AttachmentTargetInfo.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ServerPlayer } from '../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeGenerationSettings } from '../../../../../net/minecraft/world/level/biome/BiomeGenerationSettings.d.ts'
import type { BiomeManager$NoiseBiomeSource } from '../../../../../net/minecraft/world/level/biome/BiomeManager$NoiseBiomeSource.d.ts'
import type { BiomeResolver } from '../../../../../net/minecraft/world/level/biome/BiomeResolver.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess$PackedTicks } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess$PackedTicks.d.ts'
import type { LevelChunkSection } from '../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { LightChunk } from '../../../../../net/minecraft/world/level/chunk/LightChunk.d.ts'
import type { PalettedContainerFactory } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerFactory.d.ts'
import type { StructureAccess } from '../../../../../net/minecraft/world/level/chunk/StructureAccess.d.ts'
import type { UpgradeData } from '../../../../../net/minecraft/world/level/chunk/UpgradeData.d.ts'
import type { ChunkStatus } from '../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { GameEventListenerRegistry } from '../../../../../net/minecraft/world/level/gameevent/GameEventListenerRegistry.d.ts'
import type { BelowZeroRetrogen } from '../../../../../net/minecraft/world/level/levelgen/BelowZeroRetrogen.d.ts'
import type { Heightmap } from '../../../../../net/minecraft/world/level/levelgen/Heightmap.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { NoiseChunk } from '../../../../../net/minecraft/world/level/levelgen/NoiseChunk.d.ts'
import type { BlendingData } from '../../../../../net/minecraft/world/level/levelgen/blending/BlendingData.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureStart } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureStart.d.ts'
import type { ChunkSkyLightSources } from '../../../../../net/minecraft/world/level/lighting/ChunkSkyLightSources.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { TickContainerAccess } from '../../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export abstract class ChunkAccess extends Object implements AttachmentTarget, AttachmentTargetImpl, BiomeManager$NoiseBiomeSource, LightChunk, StructureAccess {
    static NBT_ATTACHMENT_KEY: string;
    static NO_FILLED_SECTION: number;
    static getOrCreateOffsetList(paramlist: (Object | null)[], paramsectionIndex: number): (Object | null)[];
    static problemPath(parampos: ChunkPos): () => string;
    static transfer(paramarg0: AttachmentTarget, paramarg1: AttachmentTarget, paramarg2: boolean): void;
    constructor(chunkPos: ChunkPos, upgradeData: UpgradeData, levelHeightAccessor: LevelHeightAccessor, containerFactory: PalettedContainerFactory, inhabitedTime: number, sections: LevelChunkSection[], blendingData: BlendingData)
    // private attachedChangedListeners: Map<Object, Object>;
    readonly blendingData: BlendingData;
    // private blockEntities: Map<BlockPos, BlockEntity>;
    // private carverBiomeSettings: BiomeGenerationSettings;
    // private chunkPos: ChunkPos;
    // private dataAttachments: Map<Object, Object>;
    // private deferredSyncedAttachments: (Object | null)[];
    readonly heightmaps: { [key in Heightmap$Types]: Heightmap };
    readonly inhabitedTime: number;
    // private isLightCorrect: boolean;
    // private levelHeightAccessor: LevelHeightAccessor;
    // private noiseChunk: NoiseChunk;
    // private pendingBlockEntities: Map<BlockPos, CompoundTag>;
    readonly postProcessing: (Object | null)[][];
    readonly sections: LevelChunkSection[];
    skyLightSources: ChunkSkyLightSources;
    // private structureStarts: Map<Structure, StructureStart>;
    // private structuresRefences: Map<Structure, (Object | null)[]>;
    // private syncedAttachments: Map<Object, Object>;
    readonly unsaved: boolean;
    readonly upgradeData: UpgradeData;
    // private acknowledgeSynced(arg0: AttachmentType<Object>, arg1: Object): void;
    // private acknowledgeSyncedEntry(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    addEntity(entity: Entity): void;
    addPackedPostProcess(packedOffsets: (Object | null)[], sectionIndex: number): void;
    addReferenceForStructure(structure: Structure, reference: number): void;
    canBeSerialized(): boolean;
    carverBiome(source: () => BiomeGenerationSettings): BiomeGenerationSettings;
    fabric_clearDeferredSyncChanges(): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: AttachmentChange) => void): void;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: Object) => void): void;
    fabric_getAttachments(): Map<AttachmentType<Object>, Object | null>;
    fabric_getAttachments(): Map<Object | null, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: ServerPlayer[]): void;
    fabric_sendAndClearDeferredSyncChanges(arg0: (Object | null)[]): void;
    fabric_shouldDeferSync(): boolean;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_updateSyncTarget<T extends Object | number | string | boolean>(arg0: AttachmentTargetInfo<T>, arg1: AttachmentTargetInfo<T>): void;
    fabric_updateSyncTarget(arg0: AttachmentTargetInfo<Object>, arg1: AttachmentTargetInfo<Object>): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    fillBiomesFromNoise(biomeResolver: BiomeResolver, sampler: Climate$Sampler): void;
    findBlockLightSources(consumer: (param0: BlockPos, param1: BlockState) => void): void;
    findBlocks(predicate: (param0: BlockState) => boolean, consumer: (param0: BlockPos, param1: BlockState) => void): void;
    getAllReferences(): Map<Structure, (Object | null)[]>;
    getAllStarts(): Map<Structure, StructureStart>;
    getAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttached(arg0: AttachmentType<Object>): Object;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getAttachedOrCreate<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrElse<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrGet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: () => A): A;
    getAttachedOrSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    getAttachedOrThrow<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    getBelowZeroRetrogen(): BelowZeroRetrogen;
    getBlendingData(): BlendingData;
    getBlockEntitiesPos(): BlockPos[];
    getBlockEntityNbt(blockPos: BlockPos): CompoundTag;
    getBlockEntityNbtForSaving(blockPos: BlockPos, registryAccess: HolderLookup$Provider): CompoundTag;
    getBlockTicks(): TickContainerAccess<Block>;
    getFluidTicks(): TickContainerAccess<Fluid>;
    getHeight(): number;
    getHeight(type: Heightmap$Types, x: number, z: number): number;
    getHeightAccessorForGeneration(): LevelHeightAccessor;
    getHeightmaps(): Map$Entry<Heightmap$Types, Heightmap>[];
    getHighestFilledSectionIndex(): number;
    getHighestGeneratedStatus(): ChunkStatus;
    getHighestSectionPosition(): number;
    getInhabitedTime(): number;
    getListenerRegistry(section: number): GameEventListenerRegistry;
    getMinY(): number;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getOrCreateHeightmapUnprimed(type: Heightmap$Types): Heightmap;
    getOrCreateNoiseChunk(factory: (param0: ChunkAccess) => NoiseChunk): NoiseChunk;
    getPersistedStatus(): ChunkStatus;
    getPos(): ChunkPos;
    getPostProcessing(): (Object | null)[][];
    getReferencesForStructure(structure: Structure): (Object | null)[];
    getSection(sectionIndex: number): LevelChunkSection;
    getSections(): LevelChunkSection[];
    getSkyLightSources(): ChunkSkyLightSources;
    getStartForStructure(structure: Structure): StructureStart;
    getTicksForSerialization(currentTick: number): ChunkAccess$PackedTicks;
    getUpgradeData(): UpgradeData;
    hasAnyStructureReferences(): boolean;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    hasPrimedHeightmap(type: Heightmap$Types): boolean;
    incrementInhabitedTime(inhabitedTimeDelta: number): void;
    initializeLightSources(): void;
    isLightCorrect(): boolean;
    isOldNoiseGeneration(): boolean;
    isUnsaved(): boolean;
    isUpgrading(): boolean;
    isYSpaceEmpty(yStartInclusive: number, yEndInclusive: number): boolean;
    markPosForPostprocessing(blockPos: BlockPos): void;
    markUnsaved(): void;
    modifyAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: (param0: A) => Object | null): A;
    onAttachedSet<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): Event<(param0: A, param1: A) => void>;
    onAttachedSet(arg0: AttachmentType<Object>): Event<Object>;
    problemPath(): () => string;
    removeAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>): A;
    removeBlockEntity(pos: BlockPos): void;
    setAllReferences(data: Map<Structure, (Object | null)[]>): void;
    setAllStarts(starts: Map<Structure, StructureStart>): void;
    setAttached<A extends Object | number | string | boolean>(arg0: AttachmentType<A>, arg1: A): A;
    setAttached(arg0: AttachmentType<Object>, arg1: Object): Object;
    setBlockEntity(blockEntity: BlockEntity): void;
    setBlockEntityNbt(entityTag: CompoundTag): void;
    setBlockState(pos: BlockPos, state: BlockState): BlockState;
    setBlockState(pos: BlockPos, state: BlockState, flags: number): BlockState;
    setHeightmap(key: Heightmap$Types, data: number[]): void;
    setInhabitedTime(inhabitedTime: number): void;
    setLightCorrect(isLightCorrect: boolean): void;
    setStartForStructure(structure: Structure, structureStart: StructureStart): void;
    tryMarkSaved(): boolean;
}