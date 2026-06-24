import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetCompoundText } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetCompoundText.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetMBCS$CharsetEncoderMBCS } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetMBCS$CharsetEncoderMBCS.d.ts'
export class CharsetCompoundText$CharsetEncoderCompoundText extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetCompoundText, cs: CharsetICU)
    // private gbEncoder: CharsetMBCS$CharsetEncoderMBCS[];
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}