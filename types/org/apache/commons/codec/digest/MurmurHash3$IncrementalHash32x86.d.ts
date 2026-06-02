import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MurmurHash3$IncrementalHash32x86 extends Object {
    constructor()
    // private hash: number;
    // private totalLen: number;
    // private unprocessed: number[];
    // private unprocessedLength: number;
    add(arg0: number[], arg1: number, arg2: number): void;
    end(): number;
    finalise(arg0: number, arg1: number, arg2: number[], arg3: number): number;
    start(arg0: number): void;
}