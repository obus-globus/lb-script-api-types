import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetMBCS$CharsetDecoderMBCS } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$CharsetDecoderMBCS.d.ts'
export class CharsetISO2022$CharsetDecoderISO2022KR extends CharsetDecoderICU {
    constructor(null_: CharsetISO2022$CharsetDecoderISO2022KR, cs: CharsetICU)
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    decodeLoopIBM(cnv: CharsetMBCS$CharsetDecoderMBCS, source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}