import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceAccessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePieceAccessor.d.ts'
import type { NetherFortressPieces$BridgeCrossing } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/NetherFortressPieces$BridgeCrossing.d.ts'
import type { NetherFortressPieces$PieceWeight } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/NetherFortressPieces$PieceWeight.d.ts'
export class NetherFortressPieces$StartPiece extends NetherFortressPieces$BridgeCrossing {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static createPiece(paramstructurePieceAccessor: StructurePieceAccessor, paramfootX: number, paramfootY: number, paramfootZ: number, paramdirection: Direction, paramgenDepth: number): NetherFortressPieces$BridgeCrossing;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(tag: CompoundTag)
    constructor(random: RandomSource, west: number, north: number)
    // private availableBridgePieces: NetherFortressPieces$PieceWeight[];
    // private availableCastlePieces: NetherFortressPieces$PieceWeight[];
    pendingChildren: StructurePiece[];
    // private previousPiece: NetherFortressPieces$PieceWeight;
}