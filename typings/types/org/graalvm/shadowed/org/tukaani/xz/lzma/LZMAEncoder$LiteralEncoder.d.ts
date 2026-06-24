import type { LZMACoder$LiteralCoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMACoder$LiteralCoder.d.ts'
import type { LZMAEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder.d.ts'
import type { LZMAEncoder$LiteralEncoder$LiteralSubencoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder$LiteralEncoder$LiteralSubencoder.d.ts'
import type { State } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/State.d.ts'
export class LZMAEncoder$LiteralEncoder extends LZMACoder$LiteralCoder {
    constructor(null_: LZMAEncoder, lc: number, lp: number)
    // private subencoders: LZMAEncoder$LiteralEncoder$LiteralSubencoder[];
    encode(): void;
    encodeInit(): void;
    getPrice(curByte: number, matchByte: number, prevByte: number, pos: number, state: State): number;
    reset(): void;
}