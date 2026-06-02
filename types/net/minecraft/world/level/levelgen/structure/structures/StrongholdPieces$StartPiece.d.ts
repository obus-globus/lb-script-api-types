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
import type { StrongholdPieces$PieceWeight } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/StrongholdPieces$PieceWeight.d.ts'
import type { StrongholdPieces$PortalRoom } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/StrongholdPieces$PortalRoom.d.ts'
import type { StrongholdPieces$StairsDown } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/StrongholdPieces$StairsDown.d.ts'
export class StrongholdPieces$StartPiece extends StrongholdPieces$StairsDown {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static createPiece(paramstructurePieceAccessor: StructurePieceAccessor, paramrandom: RandomSource, paramfootX: number, paramfootY: number, paramfootZ: number, paramdirection: Direction, paramgenDepth: number): StrongholdPieces$StairsDown;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(tag: CompoundTag)
    constructor(random: RandomSource, west: number, north: number)
    pendingChildren: StructurePiece[];
    portalRoomPiece: StrongholdPieces$PortalRoom;
    previousPiece: StrongholdPieces$PieceWeight;
    getLocatorPosition(): BlockPos;
}