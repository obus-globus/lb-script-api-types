import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NetherFortressPieces$NetherBridgePiece } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/NetherFortressPieces$NetherBridgePiece.d.ts'
export class NetherFortressPieces$PieceWeight extends Object {
    constructor(pieceClass: Class<NetherFortressPieces$NetherBridgePiece>, weight: number, maxPlaceCount: number)
    constructor(pieceClass: Class<NetherFortressPieces$NetherBridgePiece>, weight: number, maxPlaceCount: number, allowInRow: boolean)
    allowInRow: boolean;
    maxPlaceCount: number;
    pieceClass: Class<NetherFortressPieces$NetherBridgePiece>;
    placeCount: number;
    weight: number;
    doPlace(depth: number): boolean;
    isValid(): boolean;
}