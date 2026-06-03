import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
export interface BitRandomSource extends Object, RandomSource{
    consumeCount(rounds: number): void;
    next(bits: number): number;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextInt(origin: number, bound: number): number;
    nextInt(): number;
    nextInt(bound: number): number;
    nextInt(origin: number, bound: number): number;
    nextIntBetweenInclusive(min: number, maxInclusive: number): number;
    nextLong(): number;
    triangle(mean: number, spread: number): number;
    triangle(mean: number, spread: number): number;
}