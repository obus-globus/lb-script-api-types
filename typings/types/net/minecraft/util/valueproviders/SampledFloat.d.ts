import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export interface SampledFloat extends Object{
    sample(random: RandomSource): number;
}