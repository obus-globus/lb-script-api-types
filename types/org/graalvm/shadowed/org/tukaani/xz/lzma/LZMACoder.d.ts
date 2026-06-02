import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { State } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/State.d.ts'
export abstract class LZMACoder extends Object {
    constructor(pb: number)
    // private distAlign: number[];
    // private distSlots: number[][];
    // private distSpecial: number[][];
    // private isMatch: number[][];
    // private isRep: number[];
    // private isRep0: number[];
    // private isRep0Long: number[][];
    // private isRep1: number[];
    // private isRep2: number[];
    // private posMask: number;
    // private reps: number[];
    // private state: State;
    reset(): void;
}