import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { MarsagliaPolarGaussian } from '../../../../../net/minecraft/world/level/levelgen/MarsagliaPolarGaussian.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
import type { RandomSupport$Seed128bit } from '../../../../../net/minecraft/world/level/levelgen/RandomSupport$Seed128bit.d.ts'
import type { Xoroshiro128PlusPlus } from '../../../../../net/minecraft/world/level/levelgen/Xoroshiro128PlusPlus.d.ts'
export class XoroshiroRandomSource extends Object implements RandomSource {
    static CODEC: Codec<XoroshiroRandomSource>;
    static GAUSSIAN_SPREAD_FACTOR: number;
    static create(): RandomSource;
    static create(paramseed: number): RandomSource;
    static createThreadLocalInstance(): RandomSource;
    static createThreadLocalInstance(paramseed: number): RandomSource;
    static createThreadSafe(): RandomSource;
    constructor(seed: number)
    constructor(seedLo: number, seedHi: number)
    constructor(seed: RandomSupport$Seed128bit)
    private constructor(randomNumberGenerator: Xoroshiro128PlusPlus)
    // private gaussianSource: MarsagliaPolarGaussian;
    // private randomNumberGenerator: Xoroshiro128PlusPlus;
    consumeCount(rounds: number): void;
    fork(): RandomSource;
    forkPositional(): PositionalRandomFactory;
    // private nextBits(bits: number): number;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(origin: number, bound: number): number;
    nextInt(): number;
    nextInt(bound: number): number;
    nextIntBetweenInclusive(min: number, maxInclusive: number): number;
    nextLong(): number;
    setSeed(seed: number): void;
    triangle(mean: number, spread: number): number;
}