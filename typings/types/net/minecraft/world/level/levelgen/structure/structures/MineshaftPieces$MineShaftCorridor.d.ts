import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceAccessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePieceAccessor.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { MineshaftPieces$MineShaftPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/MineshaftPieces$MineShaftPiece.d.ts'
import type { MineshaftStructure$Type } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/MineshaftStructure$Type.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class MineshaftPieces$MineShaftCorridor extends MineshaftPieces$MineShaftPiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static findCorridorSize(paramstructurePieceAccessor: StructurePieceAccessor, paramrandom: RandomSource, paramfootX: number, paramfootY: number, paramfootZ: number, paramdirection: Direction): BoundingBox;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(genDepth: number, random: RandomSource, boundingBox: BoundingBox, direction: Direction, type: MineshaftStructure$Type)
    constructor(tag: CompoundTag)
    // private hasPlacedSpider: boolean;
    // private hasRails: boolean;
    // private numSections: number;
    // private spiderCorridor: boolean;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    addChildren(startPiece: StructurePiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource): void;
    // private canHangChainBelow(level: LevelReader, posAbove: BlockPos, stateAbove: BlockState): boolean;
    // private canPlaceColumnOnTopOf(level: LevelReader, posBelow: BlockPos, stateBelow: BlockState): boolean;
    createChest(level: ServerLevelAccessor, chunkBB: BoundingBox, random: RandomSource, pos: BlockPos, lootTable: ResourceKey<LootTable>, blockState: BlockState): boolean;
    createChest(level: WorldGenLevel, chunkBB: BoundingBox, random: RandomSource, x: number, y: number, z: number, lootTable: ResourceKey<LootTable>): boolean;
    fillColumnDown(level: WorldGenLevel, columnState: BlockState, x: number, startY: number, z: number, chunkBB: BoundingBox): void;
    fillPillarDownOrChainUp(level: WorldGenLevel, pillarState: BlockState, x: number, y: number, z: number, chunkBB: BoundingBox): void;
    // private hasSturdyNeighbours(level: WorldGenLevel, chunkBB: BoundingBox, x: number, y: number, z: number, count: number): boolean;
    // private maybePlaceCobWeb(level: WorldGenLevel, chunkBB: BoundingBox, random: RandomSource, probability: number, x: number, y: number, z: number): void;
    // private placeDoubleLowerOrUpperSupport(level: WorldGenLevel, chunkBB: BoundingBox, x: number, y: number, z: number): void;
    // private placeSupport(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z: number, y1: number, x1: number, random: RandomSource): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
}