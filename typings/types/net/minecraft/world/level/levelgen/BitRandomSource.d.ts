import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PositionalRandomFactory } from '../../../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
export interface BitRandomSource extends Object, RandomSource{
    consumeCount(rounds: number): void;
    fork(): RandomSource;
    forkPositional(): PositionalRandomFactory;
    next(bits: number): number;
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