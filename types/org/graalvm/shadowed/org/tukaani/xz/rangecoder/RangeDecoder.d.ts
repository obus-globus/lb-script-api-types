import type { RangeCoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeCoder.d.ts'
export abstract class RangeDecoder extends RangeCoder {
    static initProbs(paramprobs: number[]): void;
    constructor()
    // private code: number;
    // private range: number;
    decodeBit(probs: number[], index: number): number;
    decodeBitTree(probs: number[]): number;
    decodeDirectBits(count: number): number;
    decodeReverseBitTree(probs: number[]): number;
    normalize(): void;
}