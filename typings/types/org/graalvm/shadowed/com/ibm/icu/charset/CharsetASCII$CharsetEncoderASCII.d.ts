import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetASCII$CharsetEncoderASCII extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetASCII$CharsetEncoderASCII, cs: CharsetICU)
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    encodeLoopCoreOptimized(source: CharBuffer, target: ByteBuffer, sourceArray: string[], targetArray: number[], oldSource: number, offset: number, limit: number, flush: boolean): CoderResult;
    encodeLoopCoreUnoptimized(source: CharBuffer, target: ByteBuffer, flush: boolean): CoderResult;
    encodeMalformedOrUnmappable(source: CharBuffer, ch: number, flush: boolean): CoderResult;
    // private encodeTrail(source: CharBuffer, lead: string, flush: boolean): CoderResult;
    implReset(): void;
}