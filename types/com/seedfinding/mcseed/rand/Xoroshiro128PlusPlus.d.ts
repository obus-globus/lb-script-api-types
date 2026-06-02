import type { IRand } from '../../../../com/seedfinding/mcseed/rand/IRand.d.ts'
import type { Xoroshiro128PlusPlus$Seed128 } from '../../../../com/seedfinding/mcseed/rand/Xoroshiro128PlusPlus$Seed128.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Xoroshiro128PlusPlus extends Object implements IRand {
    static GOLDEN_RATIO_64: number;
    static SILVER_RATIO_64: number;
    static mixStafford13(paramarg0: number): number;
    static seedUniquifier(): number;
    static upgradeSeedTo128bit(paramarg0: number): Xoroshiro128PlusPlus$Seed128;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
    // private haveNextNextGaussian: boolean;
    // private nextNextGaussian: number;
    seed: Xoroshiro128PlusPlus$Seed128;
    consumeCount(arg0: number): void;
    // private nextBits(arg0: number): number;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextLong(): number;
}