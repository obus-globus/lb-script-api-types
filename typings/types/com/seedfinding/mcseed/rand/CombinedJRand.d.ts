import type { JRand } from '../../../../com/seedfinding/mcseed/rand/JRand.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CombinedJRand extends JRand {
    static nextBoolean(paramarg0: number): boolean;
    static nextDouble(paramarg0: number): number;
    static nextFloat(paramarg0: number): number;
    static nextInt(paramarg0: number): number;
    static nextInt(paramarg0: number, paramarg1: number): number;
    static nextLong(paramarg0: number): number;
    static ofInternalSeed(paramarg0: number): JRand;
    static ofScrambledSeed(paramarg0: number): JRand;
    static shuffle(paramarg0: Object[], paramarg1: JRand): void;
    static swap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static swap(paramarg0: Object[], paramarg1: number, paramarg2: number): void;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: boolean)
    readonly steps: number;
    combine(arg0: number): CombinedJRand;
    getSteps(): number;
}