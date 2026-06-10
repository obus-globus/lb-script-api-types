import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class WeightedRandom extends Object {
    static getRandomItem(paramrandom: RandomSource, paramitems: (Object | null)[], paramtotalWeight: number, paramweightGetter: (param0: Object | null) => number): Optional<Object>;
    static getRandomItem(paramrandom: RandomSource, paramitems: (Object | null)[], paramweightGetter: (param0: Object | null) => number): Optional<Object>;
    static getTotalWeight(paramitems: (Object | null)[], paramweightGetter: (param0: Object | null) => number): number;
    static getWeightedItem(paramitems: (Object | null)[], paramindex: number, paramweightGetter: (param0: Object | null) => number): Optional<Object>;
    private constructor()
}