import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
export class RandomKt extends Object {
    static Random(seed: number): Random;
    static boundsErrorMessage(from: Object, until: Object): string;
    static checkRangeBounds(from: number, until: number): void;
    static fastLog2(value: number): number;
    static nextInt(self: Random, range: { start: number; endInclusive: number; step: number }): number;
    static nextLong(self: Random, range: { start: number; endInclusive: number; step: number }): number;
    static takeUpperBits(self: number, bitCount: number): number;
}