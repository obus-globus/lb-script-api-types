import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { Charset88591 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/Charset88591.d.ts'
import type { CharsetASCII$CharsetDecoderASCII } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetASCII$CharsetDecoderASCII.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class Charset88591$CharsetDecoder88591 extends CharsetASCII$CharsetDecoderASCII {
    constructor(null_: Charset88591, cs: CharsetICU)
    decodeLoopCoreOptimized(source: ByteBuffer, target: CharBuffer, sourceArray: number[], targetArray: string[], oldSource: number, offset: number, limit: number): CoderResult;
    decodeLoopCoreUnoptimized(source: ByteBuffer, target: CharBuffer): CoderResult;
}