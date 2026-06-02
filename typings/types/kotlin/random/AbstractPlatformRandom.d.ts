import type { Random } from '../../java/util/Random.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { Random$Default } from '../../kotlin/random/Random$Default.d.ts'
export abstract class AbstractPlatformRandom extends Random {
    static Default: Random$Default;
    constructor()
    readonly impl: Random;
    nextBits(bitCount: number): number;
    nextBoolean(): boolean;
    nextBytes(array: number[]): number[];
    nextDouble(): number;
    nextFloat(): number;
    nextInt(): number;
    nextInt(until: number): number;
    nextLong(): number;
}