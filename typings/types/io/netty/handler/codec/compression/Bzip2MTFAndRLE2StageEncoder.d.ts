import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2MTFAndRLE2StageEncoder extends Object {
    constructor(arg0: number[], arg1: number, arg2: boolean[])
    // private alphabetSize: number;
    // private bwtBlock: number[];
    // private bwtLength: number;
    // private bwtValuesPresent: boolean[];
    // private mtfBlock: string[];
    // private mtfLength: number;
    // private mtfSymbolFrequencies: number[];
    encode(): void;
    mtfAlphabetSize(): number;
    mtfBlock(): string[];
    mtfLength(): number;
    mtfSymbolFrequencies(): number[];
}