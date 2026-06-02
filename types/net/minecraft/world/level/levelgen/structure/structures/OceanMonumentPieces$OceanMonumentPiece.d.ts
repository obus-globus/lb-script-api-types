import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { OceanMonumentPieces$RoomDefinition } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/OceanMonumentPieces$RoomDefinition.d.ts'
export abstract class OceanMonumentPieces$OceanMonumentPiece extends StructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(type: StructurePieceType, genDepth: number, orientation: Direction, roomDefinition: OceanMonumentPieces$RoomDefinition, roomWidth: number, roomHeight: number, roomDepth: number)
    constructor(type: StructurePieceType, orientation: Direction, genDepth: number, boundingBox: BoundingBox)
    constructor(type: StructurePieceType, tag: CompoundTag)
    // private roomDefinition: OceanMonumentPieces$RoomDefinition;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    chunkIntersects(chunkBB: BoundingBox, x0: number, z0: number, x1: number, z1: number): boolean;
    generateBoxOnFillOnly(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, targetBlock: BlockState): void;
    generateDefaultFloor(level: WorldGenLevel, chunkBB: BoundingBox, xOff: number, zOff: number, downOpening: boolean): void;
    generateWaterBox(level: WorldGenLevel, chunkBB: BoundingBox, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): void;
    spawnElder(level: WorldGenLevel, chunkBB: BoundingBox, x: number, y: number, z: number): void;
}