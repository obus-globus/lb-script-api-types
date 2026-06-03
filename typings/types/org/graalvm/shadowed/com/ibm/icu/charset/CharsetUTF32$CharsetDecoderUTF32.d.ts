import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
export class CharsetUTF32$CharsetDecoderUTF32 extends CharsetDecoderICU {
    constructor(null_: CharsetUTF32$CharsetDecoderUTF32, cs: CharsetICU)
    // private actualBOM: number[];
    // private actualEndianXOR: number;
    // private isBOMReadYet: boolean;
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}