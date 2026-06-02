import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StrongholdPieces$StrongholdPiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/StrongholdPieces$StrongholdPiece.d.ts'
export class StrongholdPieces$PieceWeight extends Object {
    constructor(pieceClass: Class<StrongholdPieces$StrongholdPiece>, weight: number, maxPlaceCount: number)
    maxPlaceCount: number;
    pieceClass: Class<StrongholdPieces$StrongholdPiece>;
    placeCount: number;
    weight: number;
    doPlace(depth: number): boolean;
    isValid(): boolean;
}