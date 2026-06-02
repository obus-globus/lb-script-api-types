import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class LZMACoder$LiteralCoder extends Object {
    constructor(null_: LZMACoder$LiteralCoder, lc: number, lp: number)
    // private lc: number;
    // private literalPosMask: number;
    getSubcoderIndex(prevByte: number, pos: number): number;
}