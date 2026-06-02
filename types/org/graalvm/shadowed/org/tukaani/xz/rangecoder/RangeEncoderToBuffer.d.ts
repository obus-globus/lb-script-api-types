import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { RangeEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeEncoder.d.ts'
export class RangeEncoderToBuffer extends RangeEncoder {
    static getBitPrice(paramprob: number, parambit: number): number;
    static getBitTreePrice(paramprobs: number[], paramsymbol: number): number;
    static getDirectBitsPrice(paramcount: number): number;
    static getReverseBitTreePrice(paramprobs: number[], paramsymbol: number): number;
    static initProbs(paramprobs: number[]): void;
    constructor(bufSize: number, arrayCache: ArrayCache)
    // private buf: number[];
    // private bufPos: number;
    finish(): number;
    getPendingSize(): number;
    putArraysToCache(arrayCache: ArrayCache): void;
    reset(): void;
    write(out: OutputStream): void;
    writeByte(b: number): void;
}