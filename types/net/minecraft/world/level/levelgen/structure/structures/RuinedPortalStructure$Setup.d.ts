import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RuinedPortalPiece$VerticalPlacement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/structures/RuinedPortalPiece$VerticalPlacement.d.ts'
export class RuinedPortalStructure$Setup extends Record {
    static CODEC: Codec<RuinedPortalStructure$Setup>;
    // private airPocketProbability: number;
    // private canBeCold: boolean;
    // private mossiness: number;
    // private overgrown: boolean;
    // private placement: RuinedPortalPiece$VerticalPlacement;
    // private replaceWithBlackstone: boolean;
    // private vines: boolean;
    // private weight: number;
    airPocketProbability(): number;
    canBeCold(): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mossiness(): number;
    overgrown(): boolean;
    placement(): RuinedPortalPiece$VerticalPlacement;
    replaceWithBlackstone(): boolean;
    toString(): string;
    vines(): boolean;
    weight(): number;
}