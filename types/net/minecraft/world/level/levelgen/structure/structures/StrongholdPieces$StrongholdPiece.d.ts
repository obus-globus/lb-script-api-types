import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceAccessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePieceAccessor.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { StrongholdPieces$StartPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/StrongholdPieces$StartPiece.d.ts'
import type { StrongholdPieces$StrongholdPiece$SmallDoorType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/StrongholdPieces$StrongholdPiece$SmallDoorType.d.ts'
export abstract class StrongholdPieces$StrongholdPiece extends StructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(type: StructurePieceType, genDepth: number, boundingBox: BoundingBox)
    constructor(type: StructurePieceType, tag: CompoundTag)
    // private entryDoor: StrongholdPieces$StrongholdPiece$SmallDoorType;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    generateSmallDoor(level: WorldGenLevel, random: RandomSource, chunkBB: BoundingBox, doorType: StrongholdPieces$StrongholdPiece$SmallDoorType, footX: number, footY: number, footZ: number): void;
    generateSmallDoorChildForward(startPiece: StrongholdPieces$StartPiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource, xOff: number, yOff: number): StructurePiece;
    generateSmallDoorChildLeft(startPiece: StrongholdPieces$StartPiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource, yOff: number, zOff: number): StructurePiece;
    generateSmallDoorChildRight(startPiece: StrongholdPieces$StartPiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource, yOff: number, zOff: number): StructurePiece;
    randomSmallDoor(random: RandomSource): StrongholdPieces$StrongholdPiece$SmallDoorType;
}