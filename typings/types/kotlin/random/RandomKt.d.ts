import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
export class RandomKt extends Object {
    static Random(paramarg0: number): Random;
    static boundsErrorMessage(paramarg0: Object, paramarg1: Object): string;
    static checkRangeBounds(paramarg0: number, paramarg1: number): void;
    static fastLog2(paramarg0: number): number;
    static nextInt(paramarg0: Random, paramarg1: { start: number; endInclusive: number; step: number }): number;
    static nextLong(paramarg0: Random, paramarg1: { start: number; endInclusive: number; step: number }): number;
    static takeUpperBits(paramarg0: number, paramarg1: number): number;
}