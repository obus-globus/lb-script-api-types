import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
import type { CharsetICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetICU.d.ts'
import type { CharsetSCSU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetSCSU.d.ts'
import type { CharsetSCSU$SCSUData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetSCSU$SCSUData.d.ts'
export class CharsetSCSU$CharsetDecoderSCSU extends CharsetDecoderICU {
    constructor(null_: CharsetSCSU, cs: CharsetICU)
    // private LabelLoop: boolean;
    // private b: number;
    // private byteOne: number;
    // private cr: CoderResult;
    // private data: CharsetSCSU$SCSUData;
    // private dynamicWindow: number;
    // private isSingleByteMode: boolean;
    // private nextSourceIndex: number;
    // private quoteWindow: number;
    // private sourceIndex: number;
    // private state: number;
    decodeLoop(in_: ByteBuffer, out: CharBuffer): CoderResult;
    decodeLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, flush: boolean): CoderResult;
    // private endLoop(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer): void;
    // private fastSingle(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, modeType: number): number;
    implReset(): void;
    // private singleByteMode(source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, modeType: number): number;
}