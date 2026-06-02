import type { Object } from '../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { PositionalRandomFactory } from '../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
export class RandomSequences$DirtyMarkingRandomSource extends Object implements RandomSource {
    static GAUSSIAN_SPREAD_FACTOR: number;
    static create(): RandomSource;
    static create(paramseed: number): RandomSource;
    static createThreadLocalInstance(): RandomSource;
    static createThreadLocalInstance(paramseed: number): RandomSource;
    static createThreadSafe(): RandomSource;
    private constructor(null_: RandomSequences$DirtyMarkingRandomSource, random: RandomSource)
    // private random: RandomSource;
    consumeCount(rounds: number): void;
    equals(obj: Object | null): boolean;
    fork(): RandomSource;
    forkPositional(): PositionalRandomFactory;
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
    triangle(mean: number, spread: number): number;
}