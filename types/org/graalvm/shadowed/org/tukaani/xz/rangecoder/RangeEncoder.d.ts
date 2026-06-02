import type { RangeCoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeCoder.d.ts'
export abstract class RangeEncoder extends RangeCoder {
    static getBitPrice(paramprob: number, parambit: number): number;
    static getBitTreePrice(paramprobs: number[], paramsymbol: number): number;
    static getDirectBitsPrice(paramcount: number): number;
    static getReverseBitTreePrice(paramprobs: number[], paramsymbol: number): number;
    static initProbs(paramprobs: number[]): void;
    constructor()
    // private cache: number;
    // private cacheSize: number;
    // private low: number;
    // private range: number;
    encodeBit(probs: number[], index: number, bit: number): void;
    encodeBitTree(probs: number[], symbol: number): void;
    encodeDirectBits(value: number, count: number): void;
    encodeReverseBitTree(probs: number[], symbol: number): void;
    finish(): number;
    getPendingSize(): number;
    reset(): void;
    // private shiftLow(): void;
    writeByte(b: number): void;
}