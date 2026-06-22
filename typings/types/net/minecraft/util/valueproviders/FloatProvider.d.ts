import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { SampledFloat } from '../../../../net/minecraft/util/valueproviders/SampledFloat.d.ts'
export interface FloatProvider extends Object, SampledFloat{
    codec(): MapCodec<FloatProvider>;
    max(): number;
    min(): number;
    sample(random: RandomSource): number;
}