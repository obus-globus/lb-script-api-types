import type { LZDecoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/LZDecoder.d.ts'
import type { LZMACoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMACoder.d.ts'
import type { LZMADecoder$LengthDecoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMADecoder$LengthDecoder.d.ts'
import type { LZMADecoder$LiteralDecoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMADecoder$LiteralDecoder.d.ts'
import type { RangeDecoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeDecoder.d.ts'
export class LZMADecoder extends LZMACoder {
    constructor(lz: LZDecoder, rc: RangeDecoder, lc: number, lp: number, pb: number)
    // private literalDecoder: LZMADecoder$LiteralDecoder;
    // private lz: LZDecoder;
    // private matchLenDecoder: LZMADecoder$LengthDecoder;
    // private rc: RangeDecoder;
    // private repLenDecoder: LZMADecoder$LengthDecoder;
    decode(): void;
    // private decodeMatch(posState: number): number;
    // private decodeRepMatch(posState: number): number;
    endMarkerDetected(): boolean;
    reset(): void;
}