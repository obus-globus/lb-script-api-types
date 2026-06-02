import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { RangeEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeEncoder.d.ts'
export class RangeEncoderToStream extends RangeEncoder {
    static getBitPrice(paramprob: number, parambit: number): number;
    static getBitTreePrice(paramprobs: number[], paramsymbol: number): number;
    static getDirectBitsPrice(paramcount: number): number;
    static getReverseBitTreePrice(paramprobs: number[], paramsymbol: number): number;
    static initProbs(paramprobs: number[]): void;
    constructor(out: OutputStream)
    // private out: OutputStream;
    writeByte(b: number): void;
}