import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BanDetail } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/BanDetail.d.ts'
export class BannedScopes extends Record {
    constructor(multiplayer?: BanDetail | null)
    // private multiplayer: BanDetail | null;
    /*not mapped: */ multiplayer(): BanDetail | null;
    component1(): BanDetail | null;
    copy(multiplayer: BanDetail | null): BannedScopes;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}