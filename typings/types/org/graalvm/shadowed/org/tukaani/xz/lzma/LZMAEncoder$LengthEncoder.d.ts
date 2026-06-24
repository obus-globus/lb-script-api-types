import type { LZMACoder$LengthCoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMACoder$LengthCoder.d.ts'
import type { LZMAEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder.d.ts'
export class LZMAEncoder$LengthEncoder extends LZMACoder$LengthCoder {
    constructor(null_: LZMAEncoder, pb: number, niceLen: number)
    // private counters: number[];
    // private prices: number[][];
    encode(len: number, posState: number): void;
    getPrice(len: number, posState: number): number;
    reset(): void;
    updatePrices(): void;
    // private updatePrices(posState: number): void;
}