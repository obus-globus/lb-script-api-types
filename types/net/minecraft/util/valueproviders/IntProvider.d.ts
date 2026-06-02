import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export interface IntProvider extends Object{
    codec(): MapCodec<IntProvider>;
    maxInclusive(): number;
    minInclusive(): number;
    sample(random: RandomSource): number;
}