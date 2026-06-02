import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AttachmentType } from '../../../../../net/fabricmc/fabric/api/attachment/v1/AttachmentType.d.ts'
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
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeResolver } from '../../../../../net/minecraft/world/level/biome/BiomeResolver.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CarvingMask } from '../../../../../net/minecraft/world/level/chunk/CarvingMask.d.ts'
import type { ChunkAccess$PackedTicks } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess$PackedTicks.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelChunkSection } from '../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { ProtoChunk } from '../../../../../net/minecraft/world/level/chunk/ProtoChunk.d.ts'
import type { ChunkStatus } from '../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { Heightmap } from '../../../../../net/minecraft/world/level/levelgen/Heightmap.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { BlendingData } from '../../../../../net/minecraft/world/level/levelgen/blending/BlendingData.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureStart } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureStart.d.ts'
import type { ChunkSkyLightSources } from '../../../../../net/minecraft/world/level/lighting/ChunkSkyLightSources.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
import type { TickContainerAccess } from '../../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class ImposterProtoChunk extends ProtoChunk {
    static NBT_ATTACHMENT_KEY: string;
    static NO_FILLED_SECTION: number;
    static getOrCreateOffsetList(paramlist: (Object | null)[], paramsectionIndex: number): (Object | null)[];
    static packOffsetCoordinates(paramblockPos: BlockPos): number;
    static problemPath(parampos: ChunkPos): () => kotlin.String;
    static unpackOffsetCoordinates(parampackedCoord: number, paramsectionY: number, paramchunkPos: ChunkPos): BlockPos;
    constructor(wrapped: LevelChunk, allowWrites: boolean)
    // private allowWrites: boolean;
    readonly wrapped: LevelChunk;
    addEntity(entity: Entity): void;
    addReferenceForStructure(structure: Structure, reference: number): void;
    canBeSerialized(): boolean;
    fabric_computeInitialSyncChanges(arg0: ServerPlayer, arg1: (param0: Object) => void): void;
    fabric_getAttachments(): Map<Object | null, Object | null>;
    fabric_getRegistryAccess(): RegistryAccess;
    fabric_getSyncTargetInfo(): AttachmentTargetInfo<Object>;
    fabric_hasPersistentAttachments(): boolean;
    fabric_markChanged(arg0: AttachmentType<Object>): void;
    fabric_readAttachmentsFromNbt(arg0: ValueInput): void;
    fabric_shouldTryToSync(): boolean;
    fabric_syncChange(arg0: AttachmentType<Object>, arg1: AttachmentChange): void;
    fabric_writeAttachmentsToNbt(arg0: ValueOutput): void;
    fillBiomesFromNoise(biomeResolver: BiomeResolver, sampler: Climate$Sampler): void;
    findBlocks(predicate: (param0: BlockState) => kotlin.Boolean, consumer: (param0: BlockPos, param1: BlockState) => void): void;
    // private fixType(type: Heightmap$Types): Heightmap$Types;
    getAllReferences(): Map<Structure, (Object | null)[]>;
    getAllStarts(): Map<Structure, StructureStart>;
    getAttached(arg0: AttachmentType<Object>): Object;
    getBlendingData(): BlendingData;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntityNbt(blockPos: BlockPos): CompoundTag;
    getBlockEntityNbtForSaving(blockPos: BlockPos, registryAccess: HolderLookup$Provider): CompoundTag;
    getBlockState(pos: BlockPos): BlockState;
    getBlockTicks(): TickContainerAccess<Block>;
    getCarvingMask(): CarvingMask;
    getFluidState(pos: BlockPos): FluidState;
    getFluidTicks(): TickContainerAccess<Fluid>;
    getHeight(type: Heightmap$Types, x: number, z: number): number;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getOrCreateCarvingMask(): CarvingMask;
    getOrCreateHeightmapUnprimed(type: Heightmap$Types): Heightmap;
    getPersistedStatus(): ChunkStatus;
    getPos(): ChunkPos;
    getReferencesForStructure(structure: Structure): (Object | null)[];
    getSection(sectionIndex: number): LevelChunkSection;
    getSections(): LevelChunkSection[];
    getSkyLightSources(): ChunkSkyLightSources;
    getStartForStructure(structure: Structure): StructureStart;
    getTicksForSerialization(currentTick: number): ChunkAccess$PackedTicks;
    getWrapped(): LevelChunk;
    hasAttached(arg0: AttachmentType<Object>): boolean;
    initializeLightSources(): void;
    isLightCorrect(): boolean;
    isUnsaved(): boolean;
    markPosForPostprocessing(blockPos: BlockPos): void;
    markUnsaved(): void;
    removeBlockEntity(pos: BlockPos): void;
    setAllReferences(data: Map<Structure, (Object | null)[]>): void;
    setAllStarts(starts: Map<Structure, StructureStart>): void;
    setAttached(arg0: AttachmentType<Object>, arg1: Object): Object;
    setBlockEntity(blockEntity: BlockEntity): void;
    setBlockEntityNbt(entityTag: CompoundTag): void;
    setBlockState(pos: BlockPos, state: BlockState, flags: number): BlockState;
    setHeightmap(key: Heightmap$Types, data: number[]): void;
    setLightCorrect(isLightCorrect: boolean): void;
    setPersistedStatus(status: ChunkStatus): void;
    setStartForStructure(structure: Structure, structureStart: StructureStart): void;
    tryMarkSaved(): boolean;
}