import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PoolElementStructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/PoolElementStructurePiece.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { MutableObject } from '../../../../../../../org/apache/commons/lang3/mutable/MutableObject.d.ts'
export class JigsawPlacement$PieceState extends Record {
    private constructor(piece: PoolElementStructurePiece, free: MutableObject<VoxelShape>, depth: number)
    // private depth: number;
    // private free: MutableObject<VoxelShape>;
    // private piece: PoolElementStructurePiece;
    depth(): number;
    equals(o: Object | null): boolean;
    free(): MutableObject<VoxelShape>;
    hashCode(): number;
    piece(): PoolElementStructurePiece;
    toString(): string;
}