import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SkinData$PersonaPieceData extends Record {
    constructor(id: string, type: string, packId: string, defaultPiece: boolean, productId: string)
    // private defaultPiece: boolean;
    // private id: string;
    // private packId: string;
    // private productId: string;
    // private type: string;
    defaultPiece(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): string;
    packId(): string;
    productId(): string;
    toString(): string;
    type(): string;
}