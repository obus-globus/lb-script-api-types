import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { CompoundTag } from '../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelAccessor } from '../../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
export abstract class ScatteredFeaturePiece extends StructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(type: StructurePieceType, west: number, floor: number, north: number, width: number, height: number, depth: number, direction: Direction)
    constructor(type: StructurePieceType, tag: CompoundTag)
    // private depth: number;
    // private height: number;
    // private heightPosition: number;
    // private width: number;
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    updateAverageGroundHeight(level: LevelAccessor, chunkBB: BoundingBox, offset: number): boolean;
    updateHeightPositionToLowestGroundHeight(level: LevelAccessor, offset: number): boolean;
}