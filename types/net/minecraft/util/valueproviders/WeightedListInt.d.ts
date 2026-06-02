import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { WeightedList } from '../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class WeightedListInt extends Object implements IntProvider {
    static MAP_CODEC: MapCodec<WeightedListInt>;
    constructor(distribution: WeightedList<IntProvider>)
    // private distribution: WeightedList<IntProvider>;
    // private maxValue: number;
    // private minValue: number;
    codec(): MapCodec<WeightedListInt>;
    maxInclusive(): number;
    minInclusive(): number;
    sample(random: RandomSource): number;
}