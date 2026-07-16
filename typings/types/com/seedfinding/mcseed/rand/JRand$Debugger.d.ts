import type { LCG } from '../../../../com/seedfinding/mcseed/lcg/LCG.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JRand$Debugger extends JRand {
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
    constructor(arg0: JRand)
    // private delegate: JRand;
    readonly globalCounter: number;
    // private hasCalledAdvance: boolean;
    readonly nextIntSkip: number;
    advance(arg0: LCG): void;
    advance(arg0: number): void;
    getGlobalCounter(): number;
    getNextIntSkip(): number;
    getSeed(): number;
    next(arg0: number): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextSeed(): number;
    setSeed(arg0: number): void;
    setSeed(arg0: number, arg1: boolean): void;
}