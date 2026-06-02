import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { ScatteredFeaturePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/ScatteredFeaturePiece.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
export class DesertPyramidPiece extends ScatteredFeaturePiece {
    static DEPTH: number;
    static WIDTH: number;
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(tag: CompoundTag)
    constructor(random: RandomSource, west: number, north: number)
    // private hasPlacedChest: (Object | null)[];
    readonly potentialSuspiciousSandWorldPositions: BlockPos[];
    readonly randomCollapsedRoofPos: BlockPos;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    // private addCellar(level: WorldGenLevel, chunkBB: BoundingBox): void;
    // private addCellarRoom(roomCenter: BlockPos, level: WorldGenLevel, chunkBB: BoundingBox): void;
    // private addCellarStairs(roomCenter: BlockPos, level: WorldGenLevel, chunkBB: BoundingBox): void;
    getPotentialSuspiciousSandWorldPositions(): BlockPos[];
    getRandomCollapsedRoofPos(): BlockPos;
    // private placeCollapsedRoof(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z0: number, x1: number, z1: number): void;
    // private placeCollapsedRoofPiece(level: WorldGenLevel, x: number, y: number, z: number, chunkBB: BoundingBox): void;
    // private placeSand(x: number, y: number, z: number): void;
    // private placeSandBox(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
}