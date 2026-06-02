import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { ServerLevelAccessor } from '../../../../../../net/minecraft/world/level/ServerLevelAccessor.d.ts'
import type { StructureManager } from '../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Mirror } from '../../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece$BlockSelector } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece$BlockSelector.d.ts'
import type { StructurePieceAccessor } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePieceAccessor.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export abstract class StructurePiece extends Object {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(type: StructurePieceType, genDepth: number, boundingBox: BoundingBox)
    constructor(type: StructurePieceType, tag: CompoundTag)
    boundingBox: BoundingBox;
    genDepth: number;
    readonly mirror: Mirror;
    readonly orientation: Direction;
    readonly rotation: Rotation;
    readonly type: StructurePieceType;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    addChildren(startPiece: StructurePiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource): void;
    canBeReplaced(level: LevelReader, x: number, y: number, z: number, chunkBB: BoundingBox): boolean;
    createChest(level: ServerLevelAccessor, chunkBB: BoundingBox, random: RandomSource, pos: BlockPos, lootTable: ResourceKey<LootTable>, blockState: BlockState): boolean;
    createChest(level: WorldGenLevel, chunkBB: BoundingBox, random: RandomSource, x: number, y: number, z: number, lootTable: ResourceKey<LootTable>): boolean;
    createDispenser(level: WorldGenLevel, chunkBB: BoundingBox, random: RandomSource, x: number, y: number, z: number, facing: Direction, lootTable: ResourceKey<LootTable>): boolean;
    createTag(context: StructurePieceSerializationContext): CompoundTag;
    fillColumnDown(level: WorldGenLevel, blockState: BlockState, x: number, startY: number, z: number, chunkBB: BoundingBox): void;
    generateAirBox(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): void;
    generateBox(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, skipAir: boolean, random: RandomSource, selector: StructurePiece$BlockSelector): void;
    generateBox(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, edgeBlock: BlockState, fillBlock: BlockState, skipAir: boolean): void;
    generateBox(level: WorldGenLevel, chunkBB: BoundingBox, boxBB: BoundingBox, skipAir: boolean, random: RandomSource, selector: StructurePiece$BlockSelector): void;
    generateBox(level: WorldGenLevel, chunkBB: BoundingBox, boxBB: BoundingBox, edgeBlock: BlockState, fillBlock: BlockState, skipAir: boolean): void;
    generateMaybeBox(level: WorldGenLevel, chunkBB: BoundingBox, random: RandomSource, probability: number, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, edgeBlock: BlockState, fillBlock: BlockState, skipAir: boolean, hasToBeInside: boolean): void;
    generateUpperHalfSphere(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, fillBlock: BlockState, skipAir: boolean): void;
    getBlock(level: BlockGetter, x: number, y: number, z: number, chunkBB: BoundingBox): BlockState;
    getBoundingBox(): BoundingBox;
    getGenDepth(): number;
    getLocatorPosition(): BlockPos;
    getMirror(): Mirror;
    getOrientation(): Direction;
    getRotation(): Rotation;
    getType(): StructurePieceType;
    getWorldPos(x: number, y: number, z: number): BlockPos$MutableBlockPos;
    getWorldX(x: number, z: number): number;
    getWorldY(y: number): number;
    getWorldZ(x: number, z: number): number;
    isCloseToChunk(pos: ChunkPos, distance: number): boolean;
    isInterior(level: LevelReader, x: number, y: number, z: number, chunkBB: BoundingBox): boolean;
    isReplaceableByStructures(state: BlockState): boolean;
    maybeGenerateBlock(level: WorldGenLevel, chunkBB: BoundingBox, random: RandomSource, probability: number, x: number, y: number, z: number, blockState: BlockState): void;
    move(dx: number, dy: number, dz: number): void;
    placeBlock(level: WorldGenLevel, blockState: BlockState, x: number, y: number, z: number, chunkBB: BoundingBox): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
    setGenDepth(genDepth: number): void;
    setOrientation(orientation: Direction): void;
}