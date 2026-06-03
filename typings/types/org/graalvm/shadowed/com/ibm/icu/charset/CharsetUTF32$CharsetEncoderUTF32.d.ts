import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetUTF32$CharsetEncoderUTF32 extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetUTF32$CharsetEncoderUTF32, cs: CharsetICU)
    // private temp: number[];
    // private encodeChar(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, ch: string): CoderResult;
    encodeLoop(in_: CharBuffer, out: ByteBuffer): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}