import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetUTF16 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetUTF16.d.ts'
export class CharsetUTF16$CharsetDecoderUTF16 extends CharsetDecoderICU {
    constructor(null_: CharsetUTF16, cs: CharsetICU)
    // private actualBOM: number[];
    // private actualEndianXOR: number;
    // private isBOMReadYet: boolean;
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private decodeTrail(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, lead: string): CoderResult;
    implReset(): void;
}