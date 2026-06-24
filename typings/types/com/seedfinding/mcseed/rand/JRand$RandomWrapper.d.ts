import type { JRand$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Random } from '../../../../java/util/Random.d.ts'
import type { RandomGenerator } from '../../../../java/util/random/RandomGenerator.d.ts'
export class JRand$RandomWrapper extends Random {
    static from(paramarg0: RandomGenerator): Random;
    private constructor(arg0: JRand)
    constructor(arg0: JRand, arg1: JRand$1)
    // private delegate: JRand;
    next(arg0: number): number;
    setSeed(arg0: number): void;
}