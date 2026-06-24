import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetUTF7 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetUTF7.d.ts'
export class CharsetUTF7$CharsetDecoderUTF7 extends CharsetDecoderICU {
    constructor(null_: CharsetUTF7, cs: CharsetICU)
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    implReset(): void;
}