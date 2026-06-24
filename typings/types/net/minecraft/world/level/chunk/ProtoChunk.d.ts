import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { CarvingMask } from '../../../../../net/minecraft/world/level/chunk/CarvingMask.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ChunkAccess$PackedTicks } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess$PackedTicks.d.ts'
import type { LevelChunkSection } from '../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { PalettedContainerFactory } from '../../../../../net/minecraft/world/level/chunk/PalettedContainerFactory.d.ts'
import type { UpgradeData } from '../../../../../net/minecraft/world/level/chunk/UpgradeData.d.ts'
import type { ChunkStatus } from '../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { BelowZeroRetrogen } from '../../../../../net/minecraft/world/level/levelgen/BelowZeroRetrogen.d.ts'
import type { BlendingData } from '../../../../../net/minecraft/world/level/levelgen/blending/BlendingData.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureStart } from '../../../../../net/minecraft/world/level/levelgen/structure/StructureStart.d.ts'
import type { LevelLightEngine } from '../../../../../net/minecraft/world/level/lighting/LevelLightEngine.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { LevelChunkTicks } from '../../../../../net/minecraft/world/ticks/LevelChunkTicks.d.ts'
import type { ProtoChunkTicks } from '../../../../../net/minecraft/world/ticks/ProtoChunkTicks.d.ts'
import type { TickContainerAccess } from '../../../../../net/minecraft/world/ticks/TickContainerAccess.d.ts'
export class ProtoChunk extends ChunkAccess {
    static NBT_ATTACHMENT_KEY: string;
    static NO_FILLED_SECTION: number;
    static getOrCreateOffsetList(paramlist: (Object | null)[], paramsectionIndex: number): (Object | null)[];
    static packOffsetCoordinates(parampos: BlockPos): number;
    static problemPath(parampos: ChunkPos): () => string;
    static unpackOffsetCoordinates(parampackedData: number, paramsectionY: number, paramchunkPos: ChunkPos): BlockPos;
    constructor(chunkPos: ChunkPos, upgradeData: UpgradeData, sections: LevelChunkSection[], blockTicks: ProtoChunkTicks<Block>, fluidTicks: ProtoChunkTicks<Fluid>, levelHeightAccessor: LevelHeightAccessor, containerFactory: PalettedContainerFactory, blendingData: BlendingData)
    constructor(chunkPos: ChunkPos, upgradeData: UpgradeData, levelHeightAccessor: LevelHeightAccessor, containerFactory: PalettedContainerFactory, blendingData: BlendingData)
    readonly belowZeroRetrogen: BelowZeroRetrogen;
    readonly blockTicks: ProtoChunkTicks<Block>;
    readonly carvingMask: CarvingMask;
    readonly entities: CompoundTag[];
    readonly fluidTicks: ProtoChunkTicks<Fluid>;
    readonly lightEngine: LevelLightEngine;
    // private status: ChunkStatus;
    addEntity(tag: CompoundTag): void;
    addEntity(entity: Entity): void;
    addPackedPostProcess(packedOffsets: (Object | null)[], sectionIndex: number): void;
    getBelowZeroRetrogen(): BelowZeroRetrogen;
    getBlockEntities(): Map<BlockPos, BlockEntity>;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockEntityNbtForSaving(blockPos: BlockPos, registryAccess: HolderLookup$Provider): CompoundTag;
    getBlockEntityNbts(): Map<BlockPos, CompoundTag>;
    getBlockState(pos: BlockPos): BlockState;
    getBlockTicks(): TickContainerAccess<Block>;
    getCarvingMask(): CarvingMask;
    getEntities(): CompoundTag[];
    getFluidState(pos: BlockPos): FluidState;
    getFluidTicks(): TickContainerAccess<Fluid>;
    getHeightAccessorForGeneration(): LevelHeightAccessor;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    getOrCreateCarvingMask(): CarvingMask;
    getPersistedStatus(): ChunkStatus;
    getTicksForSerialization(currentTick: number): ChunkAccess$PackedTicks;
    markPosForPostProcessing(blockPos: BlockPos): void;
    removeBlockEntity(pos: BlockPos): void;
    setBelowZeroRetrogen(belowZeroRetrogen: BelowZeroRetrogen): void;
    setBlockEntity(blockEntity: BlockEntity): void;
    setBlockState(pos: BlockPos, state: BlockState): BlockState;
    setBlockState(pos: BlockPos, state: BlockState, flags: number): BlockState;
    setCarvingMask(data: CarvingMask): void;
    setLightEngine(lightEngine: LevelLightEngine): void;
    setPersistedStatus(status: ChunkStatus): void;
    setStartForStructure(structure: Structure, structureStart: StructureStart): void;
    unpackBlockTicks(): LevelChunkTicks<Block>;
    unpackFluidTicks(): LevelChunkTicks<Fluid>;
}