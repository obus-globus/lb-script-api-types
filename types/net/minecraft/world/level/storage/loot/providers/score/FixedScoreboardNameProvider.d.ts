import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ScoreboardNameProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/score/ScoreboardNameProvider.d.ts'
import type { ScoreHolder } from '../../../../../../../../net/minecraft/world/scores/ScoreHolder.d.ts'
export class FixedScoreboardNameProvider extends Record implements ScoreboardNameProvider {
    static MAP_CODEC: MapCodec<FixedScoreboardNameProvider>;
    static forName(paramname: string): ScoreboardNameProvider;
    constructor(name: string)
    // private name: string;
    codec(): MapCodec<FixedScoreboardNameProvider>;
    equals(o: Object | null): boolean;
    getScoreHolder(context: LootContext): ScoreHolder;
    hashCode(): number;
    name(): string;
    toString(): string;
}