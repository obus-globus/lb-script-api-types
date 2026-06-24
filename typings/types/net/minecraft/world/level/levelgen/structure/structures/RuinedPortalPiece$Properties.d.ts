import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RuinedPortalPiece$Properties extends Record {
    static CODEC: Codec<RuinedPortalPiece$Properties>;
    constructor(cold: boolean, mossiness: number, airPocket: boolean, overgrown: boolean, vines: boolean, replaceWithBlackstone: boolean)
    // private airPocket: boolean;
    // private cold: boolean;
    // private mossiness: number;
    // private overgrown: boolean;
    // private replaceWithBlackstone: boolean;
    // private vines: boolean;
    airPocket(): boolean;
    cold(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mossiness(): number;
    overgrown(): boolean;
    replaceWithBlackstone(): boolean;
    toString(): string;
    vines(): boolean;
}