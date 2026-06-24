import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetISCII } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetISCII.d.ts'
import type { CharsetISCII$UConverterDataISCII } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetISCII$UConverterDataISCII.d.ts'
export class CharsetISCII$CharsetDecoderISCII extends CharsetDecoderICU {
    constructor(null_: CharsetISCII, cs: CharsetICU)
    // private GetMapping(sourceChar: number, targetUniChar: number, data: CharsetISCII$UConverterDataISCII): number;
    // private WriteToTargetToU(offsets: IntBuffer, offset: number, source: ByteBuffer, target: CharBuffer, targetUniChar: number, delta: number): CoderResult;
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}