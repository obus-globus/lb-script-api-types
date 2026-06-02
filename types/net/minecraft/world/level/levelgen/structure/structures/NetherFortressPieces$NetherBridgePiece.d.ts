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
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
import type { StructurePieceType } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { NetherFortressPieces$PieceWeight } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/NetherFortressPieces$PieceWeight.d.ts'
import type { NetherFortressPieces$StartPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/NetherFortressPieces$StartPiece.d.ts'
export abstract class NetherFortressPieces$NetherBridgePiece extends StructurePiece {
    static createBoundingBox(parampieces: Stream<StructurePiece>): BoundingBox;
    static findCollisionPiece(parampieces: StructurePiece[], parambox: BoundingBox): StructurePiece;
    static reorient(paramlevel: BlockGetter, paramblockPos: BlockPos, paramblockState: BlockState): BlockState;
    constructor(type: StructurePieceType, genDepth: number, boundingBox: BoundingBox)
    constructor(type: StructurePieceType, tag: CompoundTag)
    addAdditionalSaveData(context: StructurePieceSerializationContext, tag: CompoundTag): void;
    // private generateAndAddPiece(startPiece: NetherFortressPieces$StartPiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource, footX: number, footY: number, footZ: number, direction: Direction, depth: number, isCastle: boolean): StructurePiece;
    generateChildForward(startPiece: NetherFortressPieces$StartPiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource, xOff: number, yOff: number, isCastle: boolean): StructurePiece;
    generateChildLeft(startPiece: NetherFortressPieces$StartPiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource, yOff: number, zOff: number, isCastle: boolean): StructurePiece;
    generateChildRight(startPiece: NetherFortressPieces$StartPiece, structurePieceAccessor: StructurePieceAccessor, random: RandomSource, yOff: number, zOff: number, isCastle: boolean): StructurePiece;
    // private generatePiece(startPiece: NetherFortressPieces$StartPiece, currentPieces: NetherFortressPieces$PieceWeight[], structurePieceAccessor: StructurePieceAccessor, random: RandomSource, footX: number, footY: number, footZ: number, direction: Direction, depth: number): NetherFortressPieces$NetherBridgePiece;
    // private updatePieceWeight(currentPieces: NetherFortressPieces$PieceWeight[]): number;
}