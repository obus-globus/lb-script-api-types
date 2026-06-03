import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetMBCS$CharsetEncoderMBCS } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$CharsetEncoderMBCS.d.ts'
export class CharsetHZ$CharsetEncoderHZ extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetHZ$CharsetEncoderHZ, cs: CharsetICU)
    // private gbEncoder: CharsetMBCS$CharsetEncoderMBCS;
    // private isEscapeAppended: boolean;
    // private isTargetUCharDBCS: boolean;
    // private concatEscape(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, strToAppend: number[]): CoderResult;
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}