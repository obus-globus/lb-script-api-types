import type { Object } from '../../../java/lang/Object.d.ts'
import type { PositionalRandomFactory } from '../../../net/minecraft/world/level/levelgen/PositionalRandomFactory.d.ts'
export interface RandomSource extends Object{
    consumeCount(rounds: number): void;
    fork(): RandomSource;
    forkPositional(): PositionalRandomFactory;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(): number;
    nextInt(bound: number): number;
    nextInt(origin: number, bound: number): number;
    nextIntBetweenInclusive(min: number, maxInclusive: number): number;
    nextLong(): number;
    setSeed(seed: number): void;
    triangle(mean: number, spread: number): number;
    triangle(mean: number, spread: number): number;
}