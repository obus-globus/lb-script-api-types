import type { ChunkRand } from '../../../../com/seedfinding/mccore/rand/ChunkRand.d.ts'
import type { LCG } from '../../../../com/seedfinding/mcseed/lcg/LCG.d.ts'
import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { JRand$Debugger } from '../../../../com/seedfinding/mcseed/rand/JRand$Debugger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkRand$Debugger extends ChunkRand {
    static getInt(paramarg0: ChunkRand, paramarg1: number, paramarg2: number): number;
    static getRandom(paramarg0: (Object | null)[], paramarg1: ChunkRand): Object | null;
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
    debugger: JRand$Debugger;
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