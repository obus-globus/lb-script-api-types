import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RuinedPortalPiece$Properties extends Object {
    static CODEC: Codec<RuinedPortalPiece$Properties>;
    constructor()
    constructor(cold: boolean, mossiness: number, airPocket: boolean, overgrown: boolean, vines: boolean, replaceWithBlackstone: boolean)
    airPocket: boolean;
    cold: boolean;
    mossiness: number;
    overgrown: boolean;
    replaceWithBlackstone: boolean;
    vines: boolean;
}