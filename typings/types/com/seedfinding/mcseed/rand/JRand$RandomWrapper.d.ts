import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Random } from '../../../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../../../java/util/random/RandomGenerator.d.ts'
export class JRand$RandomWrapper extends Random {
    static from(paramarg0: RandomGenerator): Random;
    constructor(arg0: JRand, arg1: any)
    // private delegate: JRand;
    next(arg0: number): number;
    setSeed(arg0: number): void;
}