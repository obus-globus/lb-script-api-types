import type { LCG } from '../../../../com/seedfinding/mcseed/lcg/LCG.d.ts'
import type { CombinedJRand } from '../../../../com/seedfinding/mcseed/rand/CombinedJRand.d.ts'
import type { IRand } from '../../../../com/seedfinding/mcseed/rand/IRand.d.ts'
import type { JRand$Debugger } from '../../../../com/seedfinding/mcseed/rand/JRand$Debugger.d.ts'
import type { Rand } from '../../../../com/seedfinding/mcseed/rand/Rand.d.ts'
import type { Random } from '../../../../java/util/Random.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JRand extends Rand implements IRand {
    static nextBoolean(paramarg0: number): boolean;
    static nextDouble(paramarg0: number): number;
    static nextFloat(paramarg0: number): number;
    static nextInt(paramarg0: number): number;
    static nextInt(paramarg0: number, paramarg1: number): number;
    static nextLong(paramarg0: number): number;
    static ofInternalSeed(paramarg0: number): JRand;
    static ofScrambledSeed(paramarg0: number): JRand;
    static shuffle(paramarg0: Object[], paramarg1: JRand): void;
    static swap(paramarg0: Object[], paramarg1: number, paramarg2: number): void;
    constructor(arg0: LCG, arg1: number)
    constructor(arg0: LCG, arg1: number, arg2: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private haveNextNextGaussian: boolean;
    // private nextNextGaussian: number;
    asDebugger(): JRand$Debugger;
    asRandomView(): Random;
    combine(arg0: number): CombinedJRand;
    copy(): JRand;
    copyToRandom(): Random;
    next(arg0: number): number;
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextLong(): number;
    setSeed(arg0: number): void;
    setSeed(arg0: number, arg1: boolean): void;
    shuffle(arg0: (Object | null)[]): void;
    toRandom(): Random;
}