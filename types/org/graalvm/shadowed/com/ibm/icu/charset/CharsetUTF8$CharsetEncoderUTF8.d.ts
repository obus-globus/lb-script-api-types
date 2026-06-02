import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetUTF8$CharsetEncoderUTF8 extends CharsetEncoderICU {
    static getMaxBytesForString(paramlength: number, parammaxCharSize: number): number;
    constructor(null_: CharsetUTF8$CharsetEncoderUTF8, cs: CharsetICU)
    // private sourceIndex: number;
    // private targetIndex: number;
    // private encodeFourBytes(source: CharBuffer, target: ByteBuffer, char32: number): CoderResult;
    // private encodeFourBytes(sourceArray: string[], targetArray: number[], sourceLimit: number, targetLimit: number, char32: number): CoderResult;
    encodeLoop(source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}