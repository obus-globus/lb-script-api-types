import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Tag } from '../../../../../../../net/minecraft/nbt/Tag.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceSerializationContext } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceSerializationContext.d.ts'
export class PiecesContainer extends Record {
    static load(paramchildren: (Object | null)[], paramcontext: StructurePieceSerializationContext): PiecesContainer;
    constructor(pieces: StructurePiece[])
    // private pieces: StructurePiece[];
    calculateBoundingBox(): BoundingBox;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    isInsidePiece(startPos: BlockPos): boolean;
    pieces(): StructurePiece[];
    save(context: StructurePieceSerializationContext): Tag;
    toString(): string;
}