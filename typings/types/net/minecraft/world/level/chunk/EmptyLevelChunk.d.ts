import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { FullChunkStatus } from '../../../../../net/minecraft/server/level/FullChunkStatus.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { LevelChunk$EntityCreationType } from '../../../../../net/minecraft/world/level/chunk/LevelChunk$EntityCreationType.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class EmptyLevelChunk extends LevelChunk {
    static NBT_ATTACHMENT_KEY: string;
    static NO_FILLED_SECTION: number;
    static getOrCreateOffsetList(paramlist: (Object | null)[][], paramsectionIndex: number): (Object | null)[];
    static problemPath(parampos: ChunkPos): () => string;
    constructor(level: Level, pos: ChunkPos, biome: Holder<Biome>)
    // private biome: Holder<Biome>;
    addAndRegisterBlockEntity(blockEntity: BlockEntity): void;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockEntity<T extends BlockEntity>(pos: BlockPos, type: BlockEntityType<T>): Optional<T>;
    getBlockEntity(pos: BlockPos, creationType: LevelChunk$EntityCreationType): BlockEntity;
    getBlockState(pos: BlockPos): BlockState;
    getFluidState(arg0: number, arg1: number, arg2: number): FluidState;
    getFluidState(pos: BlockPos): FluidState;
    getFullStatus(): FullChunkStatus;
    getLightEmission(pos: BlockPos): number;
    getNoiseBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    isEmpty(): boolean;
    isYSpaceEmpty(yStartInclusive: number, yEndInclusive: number): boolean;
    removeBlockEntity(pos: BlockPos): void;
    setBlockEntity(blockEntity: BlockEntity): void;
    setBlockState(pos: BlockPos, state: BlockState): BlockState;
    setBlockState(pos: BlockPos, state: BlockState, flags: number): BlockState;
}