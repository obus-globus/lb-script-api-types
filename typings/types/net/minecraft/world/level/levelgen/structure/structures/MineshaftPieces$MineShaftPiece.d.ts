import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelAccessor } from '../../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { WorldGenLevel } from '../../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { MineshaftStructure$Type } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/MineshaftStructure$Type.d.ts'
export abstract class MineshaftPieces$MineShaftPiece extends StructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(pieceType: StructurePieceType, genDepth: number, type: MineshaftStructure$Type, boundingBox: BoundingBox)
    constructor(type: StructurePieceType, tag: CompoundTag)
    type: MineshaftStructure$Type;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    canBeReplaced(level: LevelReader, x: number, y: number, z: number, chunkBB: BoundingBox): boolean;
    isInInvalidLocation(level: LevelAccessor, chunkBB: BoundingBox): boolean;
    isSupportingBox(level: BlockGetter, chunkBB: BoundingBox, x0: number, x1: number, y1: number, z0: number): boolean;
    setPlanksBlock(level: WorldGenLevel, chunkBB: BoundingBox, planksBlock: BlockState, x: number, y: number, z: number): void;
}