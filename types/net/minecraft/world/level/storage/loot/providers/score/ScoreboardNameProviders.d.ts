import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ScoreboardNameProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/score/ScoreboardNameProvider.d.ts'
export class ScoreboardNameProviders extends Object {
    static CODEC: Codec<ScoreboardNameProvider>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor()
}