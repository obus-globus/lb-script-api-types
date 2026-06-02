import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextStatistics extends Object {
    constructor()
    // private counts: number[];
    // private total: number;
    addData(arg0: number[], arg1: number, arg2: number): void;
    count(): number;
    count(arg0: number): number;
    // private count(arg0: number, arg1: number): number;
    countControl(): number;
    countEightBit(): number;
    countSafeAscii(): number;
    // private countSafeControl(): number;
    isMostlyAscii(): boolean;
    looksLikeUTF8(): boolean;
}