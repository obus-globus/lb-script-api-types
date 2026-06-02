import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
export interface StructurePieceAccessor extends Object{
    addPiece(piece: StructurePiece): void;
    findCollisionPiece(box: BoundingBox): StructurePiece;
}