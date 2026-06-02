import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LZ77Compressor$Callback } from '../../../../../../org/apache/commons/compress/compressors/lz77support/LZ77Compressor$Callback.d.ts'
import type { Parameters } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters.d.ts'
export class LZ77Compressor extends Object {
    constructor(arg0: Parameters, arg1: LZ77Compressor$Callback)
    // private blockStart: number;
    // private callback: LZ77Compressor$Callback;
    // private currentPosition: number;
    // private head: number[];
    // private initialized: boolean;
    // private insertHash: number;
    // private lookahead: number;
    // private matchStart: number;
    // private missedInserts: number;
    // private params: Parameters;
    // private prev: number[];
    // private wMask: number;
    // private window: number[];
    // private catchUpMissedInserts(): void;
    // private compress(): void;
    compress(arg0: number[]): void;
    compress(arg0: number[], arg1: number, arg2: number): void;
    // private doCompress(arg0: number[], arg1: number, arg2: number): void;
    finish(): void;
    // private flushBackReference(arg0: number): void;
    // private flushLiteralBlock(): void;
    // private initialize(): void;
    // private insertString(arg0: number): number;
    // private insertStringsInMatch(arg0: number): void;
    // private longestMatch(arg0: number): number;
    // private longestMatchForNextPosition(arg0: number): number;
    // private nextHash(arg0: number, arg1: number): number;
    prefill(arg0: number[]): void;
    // private slide(): void;
}