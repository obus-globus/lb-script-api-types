import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { StructurePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePiece.d.ts'
import type { StructurePieceAccessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/StructurePieceAccessor.d.ts'
import type { PiecesContainer } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pieces/PiecesContainer.d.ts'
export class StructurePiecesBuilder extends Object implements StructurePieceAccessor {
    constructor()
    // private pieces: StructurePiece[];
    addPiece(piece: StructurePiece): void;
    build(): PiecesContainer;
    clear(): void;
    findCollisionPiece(box: BoundingBox): StructurePiece;
    getBoundingBox(): BoundingBox;
    isEmpty(): boolean;
    moveBelowSeaLevel(seaLevel: number, minY: number, random: RandomSource, offset: number): number;
    moveInsideHeights(random: RandomSource, lowestAllowed: number, highestAllowed: number): void;
    offsetPiecesVertically(dy: number): void;
}