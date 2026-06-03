import type { Random } from '../../../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../../../java/util/random/RandomGenerator.d.ts'
export class ThreadLocalRandom extends Random {
    static current(): ThreadLocalRandom;
    static from(paramarg0: RandomGenerator): Random;
    static getInitialSeedUniquifier(): number;
    static setInitialSeedUniquifier(paramarg0: number): void;
    constructor()
    // private initialized: boolean;
    // private pad0: number;
    // private pad1: number;
    // private pad2: number;
    // private pad3: number;
    // private pad4: number;
    // private pad5: number;
    // private pad6: number;
    // private pad7: number;
    // private rnd: number;
    next(arg0: number): number;
    nextDouble(): number;
    nextDouble(arg0: number): number;
    nextDouble(arg0: number, arg1: number): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextInt(arg0: number, arg1: number): number;
    nextLong(): number;
    nextLong(arg0: number): number;
    nextLong(arg0: number, arg1: number): number;
    setSeed(arg0: number): void;
}