import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { State } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/State.d.ts'
export class Optimum extends Object {
    constructor()
    // private backPrev: number;
    // private backPrev2: number;
    // private hasPrev2: boolean;
    // private optPrev: number;
    // private optPrev2: number;
    // private prev1IsLiteral: boolean;
    // private price: number;
    // private reps: number[];
    // private state: State;
    reset(): void;
    set1(newPrice: number, optCur: number, back: number): void;
    set2(newPrice: number, optCur: number, back: number): void;
    set3(newPrice: number, optCur: number, back2: number, len2: number, back: number): void;
}