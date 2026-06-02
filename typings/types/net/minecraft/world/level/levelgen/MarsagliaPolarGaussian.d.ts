import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export class MarsagliaPolarGaussian extends Object {
    constructor(randomSource: RandomSource)
    // private haveNextNextGaussian: boolean;
    // private nextNextGaussian: number;
    randomSource: RandomSource;
    nextGaussian(): number;
    reset(): void;
}