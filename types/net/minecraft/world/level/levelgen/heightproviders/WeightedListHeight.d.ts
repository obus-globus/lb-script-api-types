import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { WeightedList } from '../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { WorldGenerationContext } from '../../../../../../net/minecraft/world/level/levelgen/WorldGenerationContext.d.ts'
import type { HeightProvider } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
import type { HeightProviderType } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProviderType.d.ts'
export class WeightedListHeight extends HeightProvider {
    static CODEC: Codec<HeightProvider>;
    static CODEC: MapCodec<WeightedListHeight>;
    constructor(distribution: WeightedList<HeightProvider>)
    // private distribution: WeightedList<HeightProvider>;
    getType(): HeightProviderType<Object>;
    sample(random: RandomSource, heightAccessor: WorldGenerationContext): number;
}