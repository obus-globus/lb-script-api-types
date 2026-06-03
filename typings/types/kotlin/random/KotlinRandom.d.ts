import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Random } from '../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../java/util/random/RandomGenerator.d.ts'
import type { Random as Random_2 } from '../../kotlin/random/Random.d.ts'
export class KotlinRandom extends Random implements Serializable {
    static from(paramarg0: RandomGenerator): Random;
    constructor(impl: Random_2)
    readonly impl: Random_2;
    // private seedInitialized: boolean;
    protected next(bits: number): number;
    nextBoolean(): boolean;
    nextBytes(bytes: number[]): void;
    nextDouble(): number;
    nextDouble(arg0: number): number;
    nextDouble(arg0: number, arg1: number): number;
    nextFloat(): number;
    nextFloat(arg0: number): number;
    nextFloat(arg0: number, arg1: number): number;
    nextInt(): number;
    nextInt(bound: number): number;
    nextInt(arg0: number, arg1: number): number;
    nextLong(): number;
    nextLong(arg0: number): number;
    nextLong(arg0: number, arg1: number): number;
    setSeed(seed: number): void;
}