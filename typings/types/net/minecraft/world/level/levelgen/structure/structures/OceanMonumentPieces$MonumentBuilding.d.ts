import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ChunkPos } from '../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { StructureManager } from '../../../../../../../net/minecraft/world/level/StructureManager.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkGenerator } from '../../../../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { OceanMonumentPieces$OceanMonumentPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/OceanMonumentPieces$OceanMonumentPiece.d.ts'
import type { OceanMonumentPieces$RoomDefinition } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/OceanMonumentPieces$RoomDefinition.d.ts'
export class OceanMonumentPieces$MonumentBuilding extends OceanMonumentPieces$OceanMonumentPiece {
    static BIOME_RANGE_CHECK: number;
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(tag: CompoundTag)
    constructor(random: RandomSource, west: number, north: number, direction: Direction)
    // private childPieces: OceanMonumentPieces$OceanMonumentPiece[];
    // private coreRoom: OceanMonumentPieces$RoomDefinition;
    // private sourceRoom: OceanMonumentPieces$RoomDefinition;
    // private generateEntranceArchs(level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox): void;
    // private generateEntranceWall(level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox): void;
    // private generateLowerWall(level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox): void;
    // private generateMiddleWall(level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox): void;
    // private generateRoofPiece(level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox): void;
    // private generateRoomGraph(random: RandomSource): OceanMonumentPieces$RoomDefinition[];
    // private generateUpperWall(level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox): void;
    // private generateWing(isFlipped: boolean, xoff: number, level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox): void;
    postProcess(level: WorldGenLevel, structureManager: StructureManager, generator: ChunkGenerator, random: RandomSource, chunkBB: BoundingBox, chunkPos: ChunkPos, referencePos: BlockPos): void;
}