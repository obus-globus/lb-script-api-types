import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BannedScopes } from '../../../../../../../net/ccbluex/liquidbounce/api/thirdparty/mojang/model/BannedScopes.d.ts'
export class BanStatus extends Record {
    constructor(bannedScopes?: BannedScopes | null)
    // private bannedScopes: BannedScopes | null;
    /*not mapped: */ bannedScopes(): BannedScopes | null;
    component1(): BannedScopes | null;
    copy(bannedScopes: BannedScopes | null): BanStatus;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}