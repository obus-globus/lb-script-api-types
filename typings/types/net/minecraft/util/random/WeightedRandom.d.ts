import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class WeightedRandom extends Object {
    static getRandomItem<T extends unknown>(paramrandom: RandomSource, paramitems: T[], paramtotalWeight: number, paramweightGetter: (param0: T) => number): Optional<T>;
    static getRandomItem<T extends unknown>(paramrandom: RandomSource, paramitems: T[], paramweightGetter: (param0: T) => number): Optional<T>;
    static getTotalWeight<T extends unknown>(paramitems: T[], paramweightGetter: (param0: T) => number): number;
    static getWeightedItem<T extends unknown>(paramitems: T[], paramindex: number, paramweightGetter: (param0: T) => number): Optional<T>;
    private constructor()
}