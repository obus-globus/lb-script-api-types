import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LZMACoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMACoder.d.ts'
export abstract class LZMACoder$LiteralCoder extends Object {
    constructor(null_: LZMACoder, lc: number, lp: number)
    // private lc: number;
    // private literalPosMask: number;
    getSubcoderIndex(prevByte: number, pos: number): number;
}