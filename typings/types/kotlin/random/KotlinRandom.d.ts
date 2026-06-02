import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../java/util/random/RandomGenerator.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
export class KotlinRandom extends Random implements Serializable {
    static from(paramarg0: RandomGenerator): Random;
    constructor(impl: Random)
    readonly impl: Random;
    // private seedInitialized: boolean;
    protected next(bits: number): number;
    nextBoolean(): boolean;
    nextBytes(bytes: number[]): void;
    nextDouble(): number;
    nextFloat(): number;
    nextInt(): number;
    nextInt(bound: number): number;
    nextLong(): number;
    setSeed(seed: number): void;
}