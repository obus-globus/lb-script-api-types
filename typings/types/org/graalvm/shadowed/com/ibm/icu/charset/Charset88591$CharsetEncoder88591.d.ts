import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetASCII$CharsetEncoderASCII } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetASCII$CharsetEncoderASCII.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class Charset88591$CharsetEncoder88591 extends CharsetASCII$CharsetEncoderASCII {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: Charset88591$CharsetEncoder88591, cs: CharsetICU)
    encodeLoopCoreOptimized(source: CharBuffer, target: ByteBuffer, sourceArray: string[], targetArray: number[], oldSource: number, offset: number, limit: number, flush: boolean): CoderResult;
    encodeLoopCoreUnoptimized(source: CharBuffer, target: ByteBuffer, flush: boolean): CoderResult;
}