import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetASCII$CharsetDecoderASCII extends CharsetDecoderICU {
    constructor(null_: CharsetASCII$CharsetDecoderASCII, cs: CharsetICU)
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    decodeLoopCoreOptimized(source: ByteBuffer, target: CharBuffer, sourceArray: number[], targetArray: string[], oldSource: number, offset: number, limit: number): CoderResult;
    decodeLoopCoreUnoptimized(source: ByteBuffer, target: CharBuffer): CoderResult;
    decodeMalformedOrUnmappable(ch: number): CoderResult;
}