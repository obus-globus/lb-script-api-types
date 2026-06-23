import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export interface WeightedRandomListExtension<T extends unknown> extends Object{
    sodium$getQuick(arg0: RandomSource): T;
}